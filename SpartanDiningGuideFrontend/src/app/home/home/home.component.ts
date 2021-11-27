import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Rest, RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurants: Rest[] = [];
  sortField: any;
  sortOrder:any;
  sortKey:any;
  sortOptions = [
    {label: 'Increasing Capacity', value: 'capacity'},
    {label: 'Decreasing Capacity', value: '!capacity'},
  ];

  viewUser: boolean = false;
  viewRests: boolean = true;
  viewRestDetail: boolean = false;

  restDetail: any;

  constructor(
    public rs: RestaurantService,
    public ls: LoginService
  ) { }

  ngOnInit(): void {
    this.rs.getRestaurants().then(res => {
      this.restaurants = res;
      console.log(this.restaurants);
    });
    console.log(this.ls.currentUser);
  }

  showUserPage() {
    this.viewUser = true;
    this.viewRests = false;
    this.viewRestDetail = false;
  }

  showRestDetail(event: any) {
    console.log(event);
    this.restDetail = event;
    this.viewUser = false;
    this.viewRests = false;
    this.viewRestDetail = true;
  }

  showRestaurantList() {
    this.viewUser = false;
    this.viewRests = true;
    this.viewRestDetail = false;
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}
