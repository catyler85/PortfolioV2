import { Component, OnInit } from '@angular/core';

import { WebsterService } from '../webster.service';

@Component({
  selector: 'app-webster',
  templateUrl: './webster.component.html',
  styleUrls: ['./webster.component.css']
})
export class WebsterComponent implements OnInit {

  word:string;
  def:JSON;


  getDef(): void{
    this.WebsterService.getDef(this.word)
    .subscribe(res => {
      this.def = res;
      console.log(res);      
    })
  }

  constructor(private WebsterService:WebsterService) { }

  ngOnInit(): void {
    this.word = '';
  }

}
