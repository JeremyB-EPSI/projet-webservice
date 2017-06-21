import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GeneralService {

  API = 'http://localhost:3000';

  constructor(private http: Http) { }

  sendQuestion (q: string) {
    return this.http.post(`${this.API}/question`, { question : q });
  }

  getQuestion (id: number) {
    return this.http.get(`${this.API}/question/`+id);
  }

  GetQuestionsList() {
    
  }

}
