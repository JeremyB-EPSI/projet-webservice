import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-asking',
  templateUrl: './asking.component.html',
  styleUrls: ['./asking.component.css']
})
export class AskingComponent implements OnInit {

  question : FormControl;

  constructor() {

  }

  ngOnInit() {
    this.question = new FormControl('', Validators.required);

  }

  envoyerQuestion() {
    console.log(this.question.value);
  }

}
