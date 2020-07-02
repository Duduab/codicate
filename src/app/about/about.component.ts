import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  products: any = [];

  constructor(private httpClient: HttpClient){}

  ngOnInit() {
    this.httpClient.get('assets/data.json').subscribe(data =>{
      console.log(data);
      this.products = data;
    });
  }

}
