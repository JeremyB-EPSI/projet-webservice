import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GeneralService } from '../general.service'

@Component({
  selector: 'app-asking',
  templateUrl: './asking.component.html',
  styleUrls: ['./asking.component.css']
})
export class AskingComponent implements OnInit {

  question : FormControl;

  constructor(private service : GeneralService) {

  }

  ngOnInit() {
    this.question = new FormControl('', Validators.required);

  }

  envoyerQuestion() {
    this.service.sendQuestion(this.question.value);
  }

}
