import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpServices } from './http-services';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  @Output() showProgressEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() showGlobalError: EventEmitter<any> = new EventEmitter();

  constructor(private readonly httpServices: HttpServices) {}
  /**
   * Handle show/hide global loading
   * {@param} isShowLoading
   */
  public showLoading(isShowLoading) {
    this.showProgressEvent.emit(isShowLoading);
  }

  /**
   * Handle show/hide global error
   */
  public showError(message) {
    this.showGlobalError.emit(message);
  }
}
