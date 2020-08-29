import { Component, OnInit } from '@angular/core';
import { Restaurants } from '../../../models/restaurant/restaurant.model';
import { Router } from '@angular/router';
import { RestaurantService } from '../../../services/restaurant.service';
import { RestaurantCategoryService } from '../../../services/restaurant-category.service';
import { RestaurantsCategories } from '../../../models/restaurant/restaurantCategory.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: 'restaurants.component.html'
})

export class RestaurantsComponent implements OnInit {
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

  deleteRestaurant(id: string) {
    this.restaurantService.deleteRestaurant(id).subscribe((data) => {
      const deletedContrat = this.restaurants.find(x => x.id === id);
      this.restaurants.splice(this.restaurants.indexOf(deletedContrat), 1);
    });
  }
}
