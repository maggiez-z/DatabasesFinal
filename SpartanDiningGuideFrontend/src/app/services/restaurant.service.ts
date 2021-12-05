import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(
    private http: HttpClient,
    public router: Router,
    public ls: LoginService
  ) { }

  get(table: string): Promise<any> {
    return this.http.get(`http://localhost:8000/${table}`).toPromise()
  }

  getRestaurants() {
    return this.get('restaurants').then(origRes => {
      origRes.forEach((rest: any) => {
        rest['menus'] = [];
        rest['parkings'] = [];
        rest['ratings'] = [];
        this.get('getMenu/' + rest.restaurant_id).then(restRes => {
          restRes.forEach((menu: any) => {
            let menuObj = {type: menu.type, dishes:[]};
            this.get('getDish/' + menu.menu_id).then(dishRes => {
              menuObj['dishes'] = dishRes;
            });
            rest['menus'].push(menuObj);
          });
        });
        this.get('getParking/' + rest.restaurant_id).then(parkRes => {
          parkRes.forEach((parking: any) => {
            rest.parkings.push(parking);
          });
        });
      });
      return <Rest[]> origRes;
    })
  }

  getRestaurantDetail(rest: any) {
    this.get('getRating/' + rest.restaurant_id).then(rateRes => {
      rest.ratings = rateRes;
    });
    this.get('getQuestionByRestaurant/' + rest.restaurant_id).then(qRes => {
      rest['questions'] = [];
      qRes.forEach((question: any) => {
        this.get('getAnswer/' + question.question_id).then(aRes => {
          question['answers'] = aRes;
          rest.questions.push(question);
        });
      });
    });
  }

  postAnswer(answer: string, questionId: number) {
    let answerObj = {answer: answer, question_id: questionId, user_id: this.ls.currentUser.user_id, time_answered: new Date().toDateString(), answer_id: 0}
    this.get('highestAnswerId').then(res => {
      let stringNum = res[0]['max'];
      answerObj['answer_id'] = stringNum + 1;
      console.log(answerObj);
      this.http.post("http://localhost:8000/postanswer", answerObj).toPromise().then((res: any) => {
        console.log(res);
      });
    })
  }

  postQuestion(question: string, restaurant_id: number) {
    let questionObj = {question: question, question_id: 0, user_id: this.ls.currentUser.user_id, time_asked: new Date().toDateString(), restaurant_id: restaurant_id}
    this.get('highestQuestionId').then(res => {
      let stringNum = res[0]['max'];
      questionObj['question_id'] = stringNum + 1;
      console.log(questionObj);
      this.http.post("http://localhost:8000/postquestion", questionObj).toPromise().then((res: any) => {
        console.log(res);
      });
    })
  }

  postRating(ratingObj: any) {
    this.get('highestRatingId').then(res => {
      let stringNum = res[0]['max'];
      ratingObj['rating_id'] = stringNum + 1;
      this.http.post("http://localhost:8000/postrating", ratingObj).toPromise().then((res: any) => {
        console.log(res);
      });
    })
  }

} 

export interface Rest {
  restaurant_id: any;
  restaurant_name: any;
  area: any;
  address: any;
  chef: any;
  capacity: any;
  phone_number: any;
  website: any;
  cuisine: any;
  Monday_From: any;
  Monday_To: any;
  Tuesday_From: any;
  Tuesday_To: any;
  Wednesday_From: any;
  Wednesday_To: any;
  Thursday_From: any;
  Thursday_To: any;
  Friday_From: any;
  Friday_To: any;
  Saturday_From: any;
  Saturday_To: any;
  Sunday_From: any;
  Sunday_To: any;
  menus: any[];
}
