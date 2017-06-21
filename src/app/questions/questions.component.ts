import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  private questionReceived: boolean = false;
  private question: any;

  constructor(private service: GeneralService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if (+params['id'] > 0) {
          this.getQuestion(+params['id']);
        }
      });
  }

  getQuestion(id:number) {
    this.questionReceived = false;
    this.service.getQuestion(id).subscribe(data => {
      try {
        console.log(data.json());
        this.question = data.json();
      } catch (e) {
        console.log("error : " + e);
        this.question = null;
      }
      this.questionReceived = true;
    });
  }

}
