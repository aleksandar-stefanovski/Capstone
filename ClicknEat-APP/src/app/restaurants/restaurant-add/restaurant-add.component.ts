import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantAdd } from './restaurant-add.model';
import { RestaurantsCategories } from 'src/app/restaurants/restaurant/restaurantsCategories.model';
import { NgForm } from '@angular/forms';
import { RestaurantCategoryService } from 'src/app/services/restaurant-category.service';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.scss']
})
export class RestaurantAddComponent implements OnInit {

  restaurantAdd: RestaurantAdd = new RestaurantAdd();
  restaurantCategories: RestaurantsCategories[];

  constructor(private restaurantCategoryService: RestaurantCategoryService, private restaurantService: RestaurantService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getRestaurantCategories();
    console.log('TESTT:', this.restaurantAdd.restaurantCategory);

  }

  getRestaurantCategories() {
    this.restaurantCategories = [];
    this.restaurantCategoryService.getRestaurantCategories().subscribe((res: any) => {
      this.restaurantCategories = res as RestaurantsCategories[];

      console.log('From Component getRestaurantCategories', this.restaurantCategories);
    });
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.restaurantAdd = {
      restaurantName: '',
      description: '',
      restaurantCategory: null
    };
  }

  createRestaurant(form: NgForm) {
    this.restaurantService.createRestaurant(form.value).subscribe(res => {
      this.resetForm(form);
      this.restaurantService.getRestaurants();
    });

    console.log(this.restaurantAdd.restaurantCategory);
  }

  onSubmit(form: NgForm) {
    this.createRestaurant(form);
  }

  goToRestaurants() {
    this.router.navigate(['/restaurants']);
  }
}
