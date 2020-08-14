import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestaurantsCategories } from '../../../models/restaurant/restaurantCategory.model';
import { RestaurantCategoryService } from '../../../services/restaurant-category.service';

@Component({
  selector: 'app-restaurant-categories',
  templateUrl: './restaurant-categories.component.html',
  styleUrls: ['./restaurant-categories.component.scss']
})

export class RestaurantCategoriesComponent implements OnInit {

  restaurantCategories: RestaurantsCategories[];

  constructor(private restaurantCategoryService: RestaurantCategoryService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getRestaurantCategories();
  }

  getRestaurantCategories() {
    this.restaurantCategories = [];
    this.restaurantCategoryService.getRestaurantCategories().subscribe((res: any) => {
      this.restaurantCategories = res as RestaurantsCategories[];

      console.log('From Component Restaurant Categories', this.restaurantCategories);
    });
  }

  deleteRestaurantCategory(id: string) {
    this.restaurantCategoryService.deleteRestaurantCategory(id).subscribe(res => {
      const deletedContrat = this.restaurantCategories.find(x => x.id === id);
      this.restaurantCategories.splice(this.restaurantCategories.indexOf(deletedContrat), 1);
    });
  }
}
