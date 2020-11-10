import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpServices {
  constructor(private http: HttpClient) {}

  /**
   * Construct a GET request which interprets the body as an `ArrayBuffer` and returns it.
   *
   * @return an `Observable` of the body as an `ArrayBuffer`.
   */
  get(url: string): Observable<any> {
    if (url.includes('undefined')) {
      return new Observable<any>();
    }
    const newUrl = environment.API_URL + url;
    return this.http.get(newUrl);
  }

  /**
   * Construct a POST request which interprets the body as JSON and returns it.
   *
   * @return an `Observable` of the body as an `Object`.
   */
  post(url: string, body: any): Observable<any> {
    if (url.includes('undefined')) {
      return new Observable<any>();
    }
    const newUrl = environment.API_URL + url;
    return this.http.post(newUrl, body);
  }

  /**
   * Construct a PUT request which interprets the body as an `ArrayBuffer` and returns it.
   *
   * @return an `Observable` of the body as an `ArrayBuffer`.
   */
  put(url: string, body: any): Observable<any> {
    if (url.includes('undefined')) {
      return new Observable<any>();
    }
    const newUrl = environment.API_URL + url;
    return this.http.put(newUrl, body);
  }

  /**
   * Construct a DELETE request which interprets the body as JSON and returns it.
   *
   * @return an `Observable` of the body as an `Object`.
   */
  delete(url: string): Observable<any> {
    if (url.includes('undefined')) {
      return new Observable<any>();
    }
    const newUrl = environment.API_URL + url;
    return this.http.delete(newUrl);
  }
}
