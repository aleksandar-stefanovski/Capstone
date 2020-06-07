import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  restaurants: any = [];

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurants = [];
    this.restaurantService.getRestaurants().subscribe((data: {}) => {
      console.log(data);
      this.restaurants = data;
    });
  }

  add() {
    this.router.navigate(['/restaurant-add']);
  }

  delete(id: string) {
    this.restaurantService.deleteRestaurant(id).subscribe(res => {
      this.getRestaurants();
    }, (err) => {
      console.log(err);
    });
  }

}
