import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GeneralService } from '../general.service'

@Component({
  selector: 'app-asking',
  templateUrl: './asking.component.html',
  styleUrls: ['./asking.component.css']
})
export class AskingComponent implements OnInit {

  question: FormControl;
  questionSent: boolean = false;
  questionId: number;

  constructor(private service : GeneralService) {

  }

  ngOnInit() {
    this.question = new FormControl('', Validators.required);
  }

  envoyerQuestion() {
    this.service.sendQuestion(this.question.value).subscribe(data => {
      this.questionId = data.json();
      this.questionSent = true;
    });
  }

}
