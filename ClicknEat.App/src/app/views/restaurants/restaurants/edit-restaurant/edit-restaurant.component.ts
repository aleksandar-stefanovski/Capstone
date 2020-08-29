import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RestaurantCategoryService } from '../../../../services/restaurant-category.service';
import { RestaurantService } from '../../../../services/restaurant.service';
import { RestaurantAddEdit } from '../../../../models/restaurant/restaurant.model';
import { RestaurantsCategories } from '../../../../models/restaurant/restaurantCategory.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: '../add-restaurant/shared-add-edit-restaurant.component.html',
  styleUrls: ['../add-restaurant/shared-add-edit-restaurant.component.scss']
})
export class EditRestaurantComponent implements OnInit {

  id: string;

  restaurantAddEdit: RestaurantAddEdit = new RestaurantAddEdit();
  restaurantCategories: RestaurantsCategories[];

  constructor(private restaurantCategoryService: RestaurantCategoryService, private restaurantService: RestaurantService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getRestaurantCategories();
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

  editRestaurant(form: NgForm) {
    this.restaurantService.updateRestaurant(this.id, form.value).subscribe(res => {
      this.resetForm(form);
      this.goToRestaurants();
    });

    console.log(this.restaurantAddEdit);
  }

  onSubmit(form: NgForm) {
    this.editRestaurant(form);
  }

  goToRestaurants() {
    this.router.navigate(['/restaurants']);
  }
}
