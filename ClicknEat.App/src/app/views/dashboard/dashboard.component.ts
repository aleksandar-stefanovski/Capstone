import { Component, OnInit } from '@angular/core';
import { Restaurants } from '../../models/restaurant/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';
import { Router } from '@angular/router';
import { RestaurantCategoryService } from '../../services/restaurant-category.service';
import { RestaurantsCategories } from '../../models/restaurant/restaurantCategory.model';
import { RestaurantsComponent } from '../restaurants/restaurants/restaurants.component';

@Component({
  selector: 'app-restaurants',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent extends RestaurantsComponent {

  public createImgPath = (serverPath: string) => {
    return `https://localhost:5001/${serverPath}`;
  }
}
