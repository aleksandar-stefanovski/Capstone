import { Component, OnInit } from '@angular/core';
import { RestaurantsCategories } from 'src/app/restaurants/restaurant/restaurantsCategories.model';
import { RestaurantCategoryService } from 'src/app/services/restaurant-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-category',
  templateUrl: './restaurant-category.component.html',
  styleUrls: ['./restaurant-category.component.scss']
})
export class RestaurantCategoryComponent implements OnInit {

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

  addCategory() {
    this.router.navigate(['admin/restaurant-category-add']);
  }

  deleteRestaurantCategory(id: string) {
    this.restaurantCategoryService.deleteRestaurantCategory(id).subscribe(res => {
    });
  }
}
