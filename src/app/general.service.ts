import { Injectable } from '@angular/core';

@Injectable()
export class GeneralService {

  constructor() { }

  sendQuestion (q) {
    console.log(q);

  }

}
