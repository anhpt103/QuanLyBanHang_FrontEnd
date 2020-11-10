import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PAGE_URL } from '../constants/page-url';
import { SERVICE_API } from '../constants/service-api';
import { STORE_MANAGER } from '../constants/store-manager';
import { HttpServices } from './http-services';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  msgError = {
    userError: '',
    password: '',
    all: '',
    otp: '',
  };

  constructor(
    private readonly router: Router,
    private httpServices: HttpServices
  ) {}

  public isAuthenticated(): boolean {
    // Get token storage
    const token = this.getAccessToken();
    // Check whether the token is expired an return (true or false)
    return !!token;
  }

  setAccessToken(accessToken) {
    localStorage.setItem(STORE_MANAGER.TOKEN, accessToken);
  }

  getAccessToken() {
    let token = localStorage.getItem(STORE_MANAGER.TOKEN);
    if (!token) {
      token = '';
    }
    return token;
  }

  clearAllStorage() {
    localStorage.clear();
  }

  logOut() {
    this.clearAllStorage();
    this.router.navigate([PAGE_URL.LOGIN]);
  }

  saveUserInfo(userInfo) {
    localStorage.setItem(STORE_MANAGER.UserInfo, userInfo);
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem(STORE_MANAGER.UserInfo));
  }

  login(loginForm, reCapcha, captchaResponse?, isRefreshOtp = false) {
    const { userName, password, remeberPassword, OTPCode } = loginForm.value;
    this.msgError.all = '';
    if (!userName) {
      this.msgError.userError = 'LOGIN.USERNAME.ERROR';
    } else {
      this.msgError.userError = '';
    }
    if (!password) {
      this.msgError.password = 'LOGIN.PASSWORD.ERROR';
    } else {
      this.msgError.password = '';
    }

    if (!OTPCode && !isRefreshOtp) {
      this.msgError.otp = 'LOGIN.OTP.ERROR';
    } else {
      this.msgError.otp = '';
    }

    if (password && userName && !this.msgError.otp) {
      this.msgError.password = '';
      this.msgError.userError = '';
      this.httpServices
        .post(SERVICE_API.LOGIN, {
          Username: userName,
          Password: password,
          IsRememberPassword: remeberPassword,
          RecaptchaResponse: captchaResponse || '',
          OTPCode: isRefreshOtp ? '' : OTPCode,
        })
        .subscribe((res) => {
          if (reCapcha) {
            reCapcha.reset();
          }
          if (res.Status) {
            this.msgError.all = res.Object.Message;
          } else {
            this.setAccessToken(res.Object.UserToken.Token);
          }
        });
    }
  }
}
