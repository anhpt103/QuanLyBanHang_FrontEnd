import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  public static getValidationErrorMessage(
    validatorName: string,
    validatorValue?: any,
    labelName?: string
  ): any {
    const config = {
      required: `Thông tin bắt buộc.`,
      invalidPassword: 'Độ dài mật khẩu phải ít nhất 6 ký tự và chứa một số.',
      maxlength: `Độ dài không thể nhiều hơn ${validatorValue.requiredLength} ký tự.`,
      minlength: `Độ dài phải ít nhất ${validatorValue.requiredLength} ký tự.`,
    };

    return config[validatorName];
  }

  public static passwordValidator(control: AbstractControl): any {
    if (!control.value) {
      return;
    }

    // {6,32}           - Assert password is between 6 and 32 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    // (?!.*\s)          - Spaces are not allowed
    return control.value.match(
      /^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,32}$/
    )
      ? ''
      : { invalidPassword: true };
  }
}
