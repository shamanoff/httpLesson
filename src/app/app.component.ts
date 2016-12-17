import {Component, OnInit} from '@angular/core';
import {Response} from "@angular/http";
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {

  items:any[] =[];
  asyncString: any = this.httpService.getData();
  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
        (data: any) => console.log(data),
        error =>console.log(error)
      );
  }

  onSubmit(username: string, email: string) {
    this.httpService.sendData({
      username: username,
      email: email
    })
      .subscribe(
        data=>console.log(data)
      );
  }

  onGetData(){
    this.httpService.getOwnData()
      .subscribe(
        data=>{
          const myArray = [];
          for(let key in data){
            myArray.push(data[key]);
          }
          this.items = myArray;
        }
      );
  }

}
