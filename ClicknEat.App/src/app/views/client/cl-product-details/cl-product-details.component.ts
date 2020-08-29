import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategory, Restaurant } from '../../../models/restaurant/restaurant.model';
import { GetProduct } from '../../../models/product/product.model';

@Component({
  selector: 'app-cl-product-details',
  templateUrl: './cl-product-details.component.html',
  styleUrls: ['./cl-product-details.component.scss']
})
export class ClProductDetailsComponent implements OnInit {

  productId: string;

  restaurant: Restaurant;
  product: GetProduct;
  productCategory: ProductCategory;


  constructor(private location: Location, private productsService: ProductsService,
    private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {

    this.productId = this.route.snapshot.params['productId'];
    this.getProduct();
  }

  getProduct() {
    this.productsService.getProduct(this.productId).subscribe((res: any) => {

      this.product = res as GetProduct;
      this.productCategory = res.productCategory as ProductCategory;

      console.log('From Component GET', this.product['data']);
    });
  }

  goToRestaurantDetials() {
    this.location.back();
  }
}
