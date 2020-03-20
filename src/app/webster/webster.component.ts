import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { WebsterService } from '../webster.service';
import { Definition } from './definition';

@Component({
  selector: 'app-webster',
  templateUrl: './webster.component.html',
  styleUrls: ['./webster.component.css']
})
export class WebsterComponent implements OnInit, OnDestroy {
  private alive = true;
  private open = false;

  word:string;
  searchedTerms:string[] = [];
  def:JSON;
  definition:Definition;
  definitions:Definition[];
  thes:JSON;
  seeAlso:string[] = [];


  searchDict(sTerm:string): void {
    this.WebsterService.getThes(sTerm)
    .pipe(takeWhile(() => this.alive))
    .subscribe(res => {
      this.def = res;
      this.definitions = [];
      this.seeAlso = []
      console.log('Definitions');      
      console.log(res); 

      for (let [key, value] of Object.entries(res)) {
        this.definition  = new Definition();
          
        if (res[key].hasOwnProperty("hom") || res[key].hwi.hw == sTerm){
          //this.definition.sort = res[key].meta.sort;
          this.definition.hom = res[key].hom;
          this.definition.headword = res[key].hwi.hw;
          this.definition.fl = res[key].fl;
          this.definition.shortdef;
          this.definition.shortdef = res[key].shortdef;
          this.definition.syns = res[key].meta.syns;
          this.definition.ants = res[key].meta.ants;
          
          this.definitions.push(this.definition);
        }else {
            this.seeAlso.push(res[key].hwi.hw);
        }
          
      }     
      this.definitions.sort();
      console.log(this.definitions);
      

      
    })

  }

  searchThes(sTerm:string): void {
    this.WebsterService.getThes(sTerm)
    .pipe(takeWhile(() => this.alive))
    .subscribe(t => {
      this.thes = t;
      console.log('thesaurus');
      console.log(this.thes);
      
    })

  }

  getDef(sTerm:string){
    this.word = sTerm;

    if (!this.searchedTerms.includes(sTerm)){
      this.searchedTerms.push(sTerm);
    }


    this.searchDict(sTerm);

    //this.searchThes(sTerm);
   

 
  }

  w3_open() {
    if(!this.open){
    document.getElementById("mySidebar").style.display = "block";
    this.open = true;
    }else{
      document.getElementById("mySidebar").style.display = "none";
      this.open = false;
    }
  }

  constructor(private WebsterService:WebsterService) { }

  ngOnInit(): void {
    this.word = '';
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
