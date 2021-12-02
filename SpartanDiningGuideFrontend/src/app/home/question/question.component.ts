import { Component, Input, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: any;

  @Input() userQuest: boolean = false;

  answerString: string = "";

  constructor(
    public rs: RestaurantService
  ) { }

  ngOnInit(): void {
  }

  postAnswer() {
    if (this.answerString !== "") {
      this.rs.postAnswer(this.answerString, this.question.question_id);
      this.answerString = "";
    }
  }

}
