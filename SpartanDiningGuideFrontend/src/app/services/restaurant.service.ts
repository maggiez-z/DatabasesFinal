import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  get(table: string): Promise<any> {
    return this.http.get(`http://localhost:8000/${table}`).toPromise()
  }

  getRestaurants() {
    return this.get('restaurants').then(res => {
      return <Rest[]> res;
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
}