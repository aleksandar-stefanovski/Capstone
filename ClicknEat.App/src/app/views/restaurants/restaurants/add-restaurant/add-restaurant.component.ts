import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestaurantsCategories } from '../../../../models/restaurant/restaurantCategory.model';
import { RestaurantCategoryService } from '../../../../services/restaurant-category.service';
import { RestaurantService } from '../../../../services/restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantAddEdit } from '../../../../models/restaurant/restaurant.model';

@Component({
  selector: 'app-shared-add-edit-restaurant',
  templateUrl: './shared-add-edit-restaurant.component.html',
  styleUrls: ['./shared-add-edit-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {

  restaurantAddEdit: RestaurantAddEdit = new RestaurantAddEdit();
  restaurantCategories: RestaurantsCategories[];

  constructor(private restaurantCategoryService: RestaurantCategoryService, private restaurantService: RestaurantService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getRestaurantCategories();
    console.log('TESTT:', this.restaurantAddEdit);
    console.log('TESTT2222:', this.restaurantCategories);
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
    this.restaurantAddEdit = {
      restaurantName: '',
      description: '',
      categoryToRestaurantRequest: null
    };
  }

  createRestaurant(form: NgForm) {
    console.log('EXAMPLE', form.value);
    this.restaurantService.createRestaurant(form.value).subscribe(res => {
      this.resetForm(form);
      this.goToRestaurants();
    });

  }

  onSubmit(form: NgForm) {
    this.createRestaurant(form);
  }

  goToRestaurants() {
    this.router.navigate(['/restaurants']);
  }
}
