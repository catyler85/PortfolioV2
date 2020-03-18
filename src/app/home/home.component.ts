import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  //contact form
  //name:string;
  //email:string;
  mailto:string;
  //subject:string;
  //message:string;

  //footer variables
  url:string;
  firstName:string;
  lastName:string;

  constructor() { }

  ngOnInit(): void {
    this.firstName = "Tianyi";
    this.lastName = "Ma";
    this.url = "https://unsplash.com/@tma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    this.mailto = "catyler85@gmail.com";
  }

}
