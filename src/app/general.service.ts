import { Injectable } from '@angular/core';

@Injectable()
export class GeneralService {

  constructor() { }

  sendQuestion (q: string) {
    console.log(q);
  }

  getQuestion (id: number) {

  }

  GetQuestionsList() {
    
  }

}
