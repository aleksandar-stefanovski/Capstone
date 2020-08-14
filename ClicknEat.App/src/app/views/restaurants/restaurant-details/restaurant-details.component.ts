import { Component, OnInit } from '@angular/core';
import { Products, ProductCategories, ProductCategory, Restaurant } from '../../../models/restaurant/restaurant.model';
import { RestaurantService } from '../../../services/restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant-details.component.html'
})

export class RestaurantDetailsComponent implements OnInit {

  id: string;
  restaurant: Restaurant;
  productCategory: ProductCategory;
  products: Products[];
  productCategories: ProductCategories[];

  filterData: Products[];

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getRestaurant();
  }

  getRestaurant() {
    this.restaurantService.getRestaurant(this.id).subscribe((res: any) => {
      this.restaurant = res as Restaurant;
      this.products = res.products as Products[];
      this.productCategories = res.productCategories as ProductCategories[];
      this.productCategory = res.productCategory as ProductCategory;
      this.filterData = res.products as Products[];

      console.log('From Component GET', this.restaurant, this.products);
    });
  }

  filterProductsByCategory(category: ProductCategories) {
    this.filterData = this.products.filter((product: Products) => {
      return product.productCategory.id.includes(category.id);
    });
  }

  reset() {
    this.filterData = [...this.products];
  }

  // CRU

  deleteProduct(id: string) {
    this.restaurantService.deleteRestaurant(id).subscribe((data) => {

      const deletedContrat = this.products.find(x => x.id === id);
      this.products.splice(this.products.indexOf(deletedContrat), 1);
    });
  }
}
