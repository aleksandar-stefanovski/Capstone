import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestaurantsCategories } from '../../../../models/restaurant/restaurantCategory.model';
import { RestaurantCategoryService } from '../../../../services/restaurant-category.service';
import { RestaurantService } from '../../../../services/restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantAdd } from '../../../../models/restaurant/restaurant.model';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {

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
      this.goToRestaurants();
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
