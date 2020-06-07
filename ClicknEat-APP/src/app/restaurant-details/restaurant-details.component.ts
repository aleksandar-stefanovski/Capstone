import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {

  id: any;
  data: any;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getRestaurant();
  }

  getRestaurant() {
    this.restaurantService.getRestaurant(this.id).subscribe(data => {
      this.data = data;
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }


}
