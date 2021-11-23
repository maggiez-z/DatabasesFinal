import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

}
