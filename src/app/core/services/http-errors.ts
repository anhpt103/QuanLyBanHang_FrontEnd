import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { PAGE_URL } from '../constants/page-url';

@Injectable({
  providedIn: 'root',
})
export class HttpErrors {
  ERROR_NETWORK =
    'Không kết nối được server. Vui lòng kiểm tra lại kết nối internet của bạn.';
  public stErrors: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router, private commonService: CommonService) {}

  onErrors(error) {
    this.stErrors.emit(error);
    debugger;
    switch (error.status) {
      case 0:
        this.commonService.showError(this.ERROR_NETWORK);
        break;
      case 400:
        break;
      case 405:
        this.router.navigate(['500']);
      case 500:
        this.router.navigate(['500']);
        break;
      default:
        this.router.navigate([PAGE_URL.LOGIN]);
        break;
    }
  }
}
