import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
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

  detailMenuItems: MenuItem[] = [
    {label: 'Menu', icon: 'pi pi-fw pi-home', command: () => this.detailActiveMenuTab = "Menu"},
    {label: 'Hours', icon: 'pi pi-fw pi-calendar', command: () => this.detailActiveMenuTab = "Hours"},
    {label: 'Questions', icon: 'pi pi-fw pi-pencil', command: () => this.detailActiveMenuTab = "Questions"},
    {label: 'Ratings', icon: 'pi pi-fw pi-comments', command: () => this.detailActiveMenuTab = "Ratings"},
    {label: 'Parking and Accessibility', icon: 'pi pi-fw pi-car', command: () => this.detailActiveMenuTab = "Info"},
  ];

  detailActiveMenuTab: string = "Menu";
  questionString: string = "";

  comfortRating: number = 0;
  fqRating: number = 0;
  cleanRating: number = 0;
  serviceRating:number = 0;
  commentString: string = "";

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
    this.rs.getRestaurantDetail(event);
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

  postQuestion() {
    if (this.questionString !== "") {
      this.rs.postQuestion(this.questionString, this.restDetail.restaurant_id);
      this.questionString = "";
    }
  }

  postRating() {
    let ratingObj = {comfortability: this.comfortRating, service: this.serviceRating, user_id: this.ls.currentUser.user_id, restaurant_id: this.restDetail.restaurant_id, rating_id: 0, food_quality: this.fqRating, cleanliness: this.cleanRating, comment: this.commentString};
    this.rs.postRating(ratingObj);
    this.comfortRating = 0;
    this.fqRating = 0;
    this.cleanRating = 0;
    this.serviceRating = 0;
    this.commentString = "";
  }

}
