import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestaurantCategoryAdd } from '../../../../models/restaurant/restaurantCategory.model';
import { RestaurantCategoryService } from '../../../../services/restaurant-category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant-category',
  templateUrl: './add-restaurant-category.component.html',
  styleUrls: ['./add-restaurant-category.component.scss']
})
export class AddRestaurantCategoryComponent implements OnInit {

  restaurantCategoryAdd: RestaurantCategoryAdd = new RestaurantCategoryAdd();

  constructor(private restaurantCategoryService: RestaurantCategoryService,
    private router: Router) { }

  ngOnInit(): void {
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.restaurantCategoryAdd = {
      id: null,
      restaurantCategoryName: ''
    };
  }

  createRestaurantCat(form: NgForm) {
    this.restaurantCategoryService.createRestaurantCategory(form.value).subscribe(res => {
      this.resetForm(form);
      this.goToRestaurantCat();
    });

    console.log(this.restaurantCategoryAdd);
  }

  onSubmit(form: NgForm) {
    this.createRestaurantCat(form);
  }

  goToRestaurantCat() {
    this.router.navigate(['/restaurant-categories']);
  }
}