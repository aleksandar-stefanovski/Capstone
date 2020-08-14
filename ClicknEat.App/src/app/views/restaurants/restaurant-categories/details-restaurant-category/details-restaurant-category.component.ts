import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantCategory } from '../../../../models/restaurant/restaurantCategory.model';
import { RestaurantCategoryService } from '../../../../services/restaurant-category.service';
import { RestaurantsComponent } from '../../restaurants/restaurants.component';
import { RestaurantService } from '../../../../services/restaurant.service';

@Component({
  selector: 'app-details-restaurant-category',
  templateUrl: './details-restaurant-category.component.html',
  styleUrls: ['./details-restaurant-category.component.scss']
})
export class DetailsRestaurantCategoryComponent implements OnInit {
  id: string;
  restaurantCategory?: RestaurantCategory;

  constructor(private restaurantService: RestaurantService, private restaurantCategoryService: RestaurantCategoryService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getRestaurant();
  }

  getRestaurant() {
    this.restaurantCategoryService.getRestaurantCategory(this.id).subscribe((res: any) => {
      this.restaurantCategory = res as RestaurantCategory;

      console.log('From Component RES CAT', this.restaurantCategory);
    });
  }

  deleteRestaurant(id: string) {
    this.restaurantService.deleteRestaurant(id).subscribe((res: any) => {
      const deletedContrat = this.restaurantCategory.categoryRestaurants.find(x => x.id === id);
      this.restaurantCategory.categoryRestaurants.splice(this.restaurantCategory.categoryRestaurants.indexOf(deletedContrat), 1);
    });
  }
}
