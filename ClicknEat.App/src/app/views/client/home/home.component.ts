import { Component, OnInit } from '@angular/core';
import { Restaurants } from '../../../models/restaurant/restaurant.model';
import { RestaurantsCategories } from '../../../models/restaurant/restaurantCategory.model';
import { RestaurantCategoryService } from '../../../services/restaurant-category.service';
import { RestaurantService } from '../../../services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurants: Restaurants[];
  restaurantCategories: RestaurantsCategories[];

  filterRestaurants: Restaurants[];

  logged = localStorage.getItem('token');

  constructor(private restaurantCategoryService: RestaurantCategoryService, private restaurantService: RestaurantService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getRestaurants();
    this.getRestaurantCategories();
    this.restaurantService.getRestaurants();
  }

  getRestaurants() {
    this.restaurants = [];
    this.restaurantService.getRestaurants().subscribe((res: any) => {
      this.restaurants = res as Restaurants[];

      this.filterRestaurants = res as Restaurants[];
    });
  }

  getRestaurantCategories() {
    this.restaurantCategories = [];
    this.restaurantCategoryService.getRestaurantCategories().subscribe((res: any) => {
      this.restaurantCategories = res as RestaurantsCategories[];
    });
  }

  showCategories() {
    this.router.navigate(['restaurant-categories']);
  }

  filterRestaurantByCategory(category: RestaurantsCategories) {
    this.filterRestaurants = this.restaurants.filter((restsaurant: Restaurants) => {
      return restsaurant.restaurantCategory.id.includes(category.id);
    });
  }

  reset() {
    this.filterRestaurants = [...this.restaurants];
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:5001/${serverPath}`;
  }
}
