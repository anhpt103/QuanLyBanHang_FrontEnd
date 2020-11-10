import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Subject } from 'rxjs/internal/Subject';

declare type GetDataHandler<T> = () => Observable<T>;

@Injectable({
  providedIn: 'root',
})
export class CacheService<T> {
  constructor() {
    this.subjectData = new ReplaySubject(1);
    this.observableData = this.subjectData.asObservable();
    this.cacheTimeout = 5; // default 5 minutes
  }

  protected data: T;
  protected subjectData: Subject<T>;
  protected observableData: Observable<T>;
  protected cacheTimeout: number; // minutes
  protected lastCallAPI: number; // long milliseconds
  public getHandler: GetDataHandler<T>;

  get shouldCallAPI() {
    const now = new Date().getTime();
    return (
      now - this.lastCallAPI >
      CacheService.convertMinutesToMilliseconds(this.cacheTimeout)
    );
  }

  private static convertMinutesToMilliseconds(min: number) {
    return min * 60 * 1000;
  }

  public getData(): Observable<T> {
    if (!this.getHandler) {
      throw new Error('getHandler is not defined');
    }
    if (!this.data || this.shouldCallAPI) {
      this.getHandler()
        .pipe(
          map((r: T) => {
            this.data = r;
            this.lastCallAPI = new Date().getTime();
            return r;
          })
        )
        .subscribe(
          (result) => this.subjectData.next(result),
          (err) => this.subjectData.error(err)
        );
    }
    return this.observableData;
  }

  public resetCache(): void {
    this.data = null;
  }

  public refresh(): void {
    this.resetCache();
    this.getData();
  }

  public setCacheTimeout(time: number): void {
    this.cacheTimeout = time;
  }
}
