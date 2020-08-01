import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.scss']
})
export class RestaurantEditComponent implements OnInit {

  // restaurantAdd: RestaurantAdd = new RestaurantAdd();
  // restaurantCategories: RestaurantsCategories[];

  constructor() { }

  ngOnInit(): void {
    // this.getRestaurantCategories();
    // console.log('TESTT:', this.restaurantAdd.restaurantCategory);

  }

  // getRestaurantCategories() {
  //   this.restaurantCategories = [];
  //   this.restaurantCategoryService.getRestaurantCategories().subscribe((res: any) => {
  //     this.restaurantCategories = res as RestaurantsCategories[];

  //     console.log('From Component getRestaurantCategories', this.restaurantCategories);
  //   });
  // }

  // resetForm(form?: NgForm) {
  //   if (form != null) {
  //     form.resetForm();
  //   }
  //   this.restaurantAdd = {
  //     restaurantName: '',
  //     description: '',
  //     restaurantCategory: null
  //   };
  // }

  // createRestaurant(form: NgForm) {
  //   this.restaurantService.createRestaurant(form.value).subscribe(res => {
  //     this.resetForm(form);
  //     this.restaurantService.getRestaurants();
  //   });

  //   console.log(this.restaurantAdd.restaurantCategory);
  // }

  // onSubmit(form: NgForm) {
  //   this.createRestaurant(form);
  // }

  // goToRestaurants() {
  //   this.router.navigate(['/restaurants']);
  // }
}