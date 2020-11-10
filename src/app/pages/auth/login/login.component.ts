import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SERVICE_API } from 'src/app/core/constants/service-api';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/core/services/common.service';
import { HttpServices } from 'src/app/core/services/http-services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  error: string;
  isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpServices,
    private commonService: CommonService,
    private readonly authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.commonService.showLoading(false);

    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(32),
        ],
      ],
      remember: [true],
    });
  }

  get userName() {
    return this.validateForm.controls.userName;
  }
  get password() {
    return this.validateForm.controls.password;
  }
  get remember() {
    return this.validateForm.controls.remember;
  }

  submitForm(): void {
    this.isLoading = true;
    this.userName.markAsDirty();
    this.userName.updateValueAndValidity();
    this.password.markAsDirty();
    this.password.updateValueAndValidity();

    if (this.userName.invalid || this.password.invalid) {
      this.isLoading = false;
      return;
    }

    this.httpService
      .post(SERVICE_API.LOGIN, {
        username: this.userName.value,
        password: this.password.value,
      })
      .subscribe(
        (response: any) => {
          if (response.Status == 1) {
            this.error = response.Msg;
            this.isLoading = false;
            return;
          }

          this.authService.setAccessToken(response.Object.Token);
          this.authService.saveUserInfo(JSON.stringify(response.Object));
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          this.isLoading = false;
        }
      );
  }
}
