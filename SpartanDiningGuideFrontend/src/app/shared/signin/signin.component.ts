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

}
