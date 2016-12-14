import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getData(): Observable<any> {
    return this.http.get('https://zenzen-f6f7c.firebaseio.com/title.json');
  }
}
