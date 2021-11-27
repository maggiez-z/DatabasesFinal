import { Component, OnInit } from '@angular/core';
import { Rest, RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurants: Rest[] = [];

  constructor(
    public rs: RestaurantService
  ) { }

  ngOnInit(): void {
    this.rs.getRestaurants().then(res => {
      this.restaurants = res;
      console.log(this.restaurants);
    });
  }

}
