import {Injectable} from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getData() {
    return this.http.get('https://zenzen-f6f7c.firebaseio.com/title.json')
      .map((response: Response) => response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://zenzen-f6f7c.firebaseio.com/data.json', body, {
      headers: headers
    })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  getOwnData(){
    return this.http.get('https://zenzen-f6f7c.firebaseio.com/data.json')
      .map((response: Response) => response.json());
  }

  private handleError(error: any){
    console.log(error);
    return Observable.throw(error.json());
  }
}
