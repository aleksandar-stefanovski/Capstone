import { Component, OnInit } from '@angular/core';
import { GetProduct } from '../../../../../models/product/product.model';
import { ProductCategory, Restaurant } from '../../../../../models/restaurant/restaurant.model';
import { ProductsService } from '../../../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {

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

  deleteProduct(productId: string) {
    console.log('1', '2', this.productId);

    this.productsService.deleteProduct(productId).subscribe((data) => {
      this.goToRestaurantDetials();
    });
  }

  goToRestaurantDetials() {
    this.location.back();
  }

}
