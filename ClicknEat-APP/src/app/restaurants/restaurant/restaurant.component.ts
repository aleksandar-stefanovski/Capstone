import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurants } from './restaurants.model';
import { RestaurantsCategories } from './restaurantsCategories.model';
import { RestaurantCategoryService } from 'src/app/services/restaurant-category.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

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

      console.log('+++++RESULT+++++', this.filterRestaurants);
      console.log('From Component Restaurants', this.restaurants);
    });
  }

  getRestaurantCategories() {
    this.restaurantCategories = [];
    this.restaurantCategoryService.getRestaurantCategories().subscribe((res: any) => {
      this.restaurantCategories = res as RestaurantsCategories[];

      console.log('From Component getRestaurantCategories', this.restaurantCategories);
    });
  }

  deleteRestaurant(id: string) {
    this.restaurantService.deleteRestaurant(id).subscribe(res => {
      this.restaurantService.getRestaurants();
    });
  }


  filterRestaurantByCategory(category: RestaurantsCategories) {
    this.filterRestaurants = this.restaurants.filter((restsaurant: Restaurants) => {
      return restsaurant.restaurantCategory.id.includes(category.id);
    });
  }

  reset() {
    this.filterRestaurants = [...this.restaurants];
  }

  add() {
    this.router.navigate(['admin/restaurant-add']);
  }

  showCategories() {
    this.router.navigate(['restaurant-categories']);
  }



}
