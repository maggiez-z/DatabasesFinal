import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn: boolean = false;
  failed: boolean = false;

  signInShow: boolean = false;
  loginShow: boolean = false;

  currentUser: any;

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  ngOnInit() {
    if (this.loggedIn) {
      this.router.navigate(['/home']);
    }
  }

  get(table: string): Promise<any> {
    return this.http.get(`http://localhost:8000/${table}`).toPromise()
  }

  login(userName: string, password: string) {
    return new Promise((resolve, reject) => {
      this.get('verifyLogin/' + userName + '/' + password).then(res => {
        if (res.length) {
          this.loggedIn = true;
          this.currentUser = res[0];
          this.failed = false;
          this.router.navigate(['/home']);
          resolve(res);
        }
        else {
          this.failed = true;
        }
      })
    })
  }

  signup(userObj: any) {
    this.get('highestUserId').then(res => {
      if (res) {
        userObj['user_id'] = res[0]['max'] + 1;
        console.log(userObj);
        this.http.post('http://localhost:8000/postuser',userObj).toPromise().then(res => {
          this.loggedIn = true;
          this.failed = false;  
          this.router.navigate(['/home']);
       });
      }
      else {
        this.failed = true;
      }
    });
  }

  chooseLogin() {
    this.loginShow = true;
    this.signInShow = false;
  }

  chooseSignIn() {
    this.loginShow = false;
    this.signInShow = true;
  }

}
