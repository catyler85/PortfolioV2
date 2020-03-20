import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsterService {

  getDef (word:string): Observable<JSON> {
    return this.http.get<JSON>(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=f3985f02-f306-4809-bc60-ef010ce602f1`);
  }

  getThes (word:string): Observable<JSON> {
    return this.http.get<JSON>(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=8ad4feb4-eeb3-4ff2-b881-d7c1c97a0529`);
  }


  constructor(private http: HttpClient) { }
}
