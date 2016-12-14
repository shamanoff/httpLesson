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

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
     this.httpService.getData()
      .subscribe(
        (data: Response) => console.log(data)
      );

  }
}
