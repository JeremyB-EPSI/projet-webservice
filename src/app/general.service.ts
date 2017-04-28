import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GeneralService {

  API = 'http://localhost:3000';

  constructor(private http: Http) { }

  sendQuestion (q: string) {
    this.http.get(`${this.API}/test`, {}).subscribe(data => console.log(data));
  }

  getQuestion (id: number) {

  }

  GetQuestionsList() {
    
  }

}
