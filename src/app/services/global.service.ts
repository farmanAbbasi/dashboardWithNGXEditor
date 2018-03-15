import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GlobalService {

  _baseUrl: any = 'https://jsonplaceholder.typicode.com/';
  constructor(public http: HttpClient) { }

  public httpGet(requestString): Observable<any> {
    return this.http.get(this._baseUrl + requestString);
  }

  public httpPost(requestString: string, body: Object = {}, options: Object = {}): Observable<any> {
    return this.http.post(this._baseUrl + requestString, body);
  }

}
  







































































































