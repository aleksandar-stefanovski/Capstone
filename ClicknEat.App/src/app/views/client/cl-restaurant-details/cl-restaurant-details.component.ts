import { Component, OnInit } from '@angular/core';
import { Restaurant, Products, ProductCategories, ProductCategory } from '../../../models/restaurant/restaurant.model';
import { ProductsService } from '../../../services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../../services/restaurant.service';

@Component({
  selector: 'app-cl-restaurant-details',
  templateUrl: './cl-restaurant-details.component.html',
  styleUrls: ['./cl-restaurant-details.component.scss']
})
export class ClRestaurantDetailsComponent implements OnInit {


  id: string;

  productId: string;

  restaurant: Restaurant;
  productCategory: ProductCategory;
  products: Products[];
  productCategories: ProductCategories[];

  filterData: Products[];

  constructor(private productsService: ProductsService, private restaurantService: RestaurantService,
    private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.productId = this.route.snapshot.params['productId'];
    this.getRestaurant();
  }

  getRestaurant() {
    this.restaurantService.getRestaurant(this.id).subscribe((res: any) => {
      this.restaurant = res as Restaurant;
      this.products = res.products as Products[];
      this.productCategories = res.productCategories as ProductCategories[];
      this.productCategory = res.productCategory as ProductCategory;
      this.filterData = res.products as Products[];
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

  public createImgPath = (serverPath: string) => {
    return `https://localhost:5001/${serverPath}`;
  }

  public createImgPath2 = (serverPath: string) => {
    return `https://localhost:5001/${serverPath}`;
  }
}
