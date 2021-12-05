import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  userName = '';
  email = '';
  password = '';
  address = '';
  phone = '';
  favFood = '';

  constructor(
    public ls: LoginService
  ) { }

  ngOnInit(): void {
  }

  sendSignup() {
    let userObj = {user_name: this.userName, email: this.email, password: this.password, address: this.address, phone_number: this.phone, favorite_food: this.favFood}
    this.ls.signup(userObj);
  }

}
