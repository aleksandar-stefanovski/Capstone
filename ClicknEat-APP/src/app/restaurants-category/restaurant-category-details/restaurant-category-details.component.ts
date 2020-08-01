import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantCategoryService } from 'src/app/services/restaurant-category.service';
import { Restaurant } from 'src/app/restaurants/restaurant-details/restaurant.model';
import { RestaurantCategory } from './restaurant-category.model';
import { CategoryRestaurants } from './category-restaurants.model';

@Component({
  selector: 'app-restaurant-category-details',
  templateUrl: './restaurant-category-details.component.html',
  styleUrls: ['./restaurant-category-details.component.scss']
})
export class RestaurantCategoryDetailsComponent implements OnInit {

  id: string;
  restaurantCategory: RestaurantCategory;
  categoryRestaurants: CategoryRestaurants[];

  constructor(private restaurantCategoryService: RestaurantCategoryService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getRestaurantCategory();
  }

  getRestaurantCategory() {
    this.restaurantCategoryService.getRestaurantCategory(this.id).subscribe((res: any) => {
      this.restaurantCategory = res as RestaurantCategory;
      this.categoryRestaurants = res.categoryRestaurants as CategoryRestaurants[];

      console.log('CATEGORY RESTAURANTS:', this.categoryRestaurants);
    });
  }
}
