import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrors } from '../services/http-errors';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { catchError, retry, finalize, map } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PAGE_URL } from '../constants/page-url';

@Injectable({
  providedIn: 'root',
})
export class ServiceInterceptor implements HttpInterceptor {
  constructor(
    private readonly httpErr: HttpErrors,
    private readonly authService: AuthService,
    private router: Router,
    private readonly commonService: CommonService,
    private notification: NzNotificationService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.commonService.showLoading(true);

    let authReq = req;
    if (!req.headers.get('Authorization')) {
      const token = this.authService.getAccessToken();
      if (token) {
        authReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      }
    }

    return next.handle(authReq).pipe(
      map((res: HttpResponse<any>) => {
        const body = res.body;
        // Handle case Token không hợp lệ hoặc đã hết hạn
        if (body && body.Status === -1) {
          if (location.pathname !== '/' + PAGE_URL.LOGIN) {
            this.authService.clearAllStorage();
            this.notification.success(
              'Bạn đã hết phiên đăng nhập. Mời bạn đăng nhập lại.',
              ''
            );
            this.router.navigate([PAGE_URL.LOGIN]);
          }
        } else if (
          body &&
          body.Status === 1 &&
          location.href !== location.origin + '/' + PAGE_URL.LOGIN
        ) {
          this.notification.error(body.Msg, '');
        }
        return res;
      }),
      catchError((error) => {
        this.httpErr.onErrors(error);
        return throwError(error);
      }),
      finalize(() => {
        this.commonService.showLoading(false);
      })
    );
  }
}
