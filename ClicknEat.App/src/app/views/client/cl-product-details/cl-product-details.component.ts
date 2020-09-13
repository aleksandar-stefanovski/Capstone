import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategory, Restaurant } from '../../../models/restaurant/restaurant.model';
import { GetProduct } from '../../../models/product/product.model';
import { CartService } from '../../../services/cart.service';
import { ShoppingCart } from '../../../models/shopping-cart/shopping-cart.model';

@Component({
  selector: 'app-cl-product-details',
  templateUrl: './cl-product-details.component.html',
  styleUrls: ['./cl-product-details.component.scss']
})
export class ClProductDetailsComponent implements OnInit {

  productId: string;
  getShoppingCart: ShoppingCart;
  restaurant: Restaurant;
  product: GetProduct;
  productCategory: ProductCategory;

  constructor(private location: Location, private productsService: ProductsService,
    private cartService: CartService, private route: ActivatedRoute, private router: Router) {

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


  getCart() {
    const test = this.cartService.getShoppingCart().subscribe((res) => {
      this.getShoppingCart = res as ShoppingCart;
    });

    if (test) {
      console.log('WORKS');
    } else {
      console.log('FALSE');
    }
  }

  // addToCart(id: any) {

  //   if (id === null) {
  //     return console.log('Error');
  //   } else {
  //     this.cartService.createShoppingCart(id).subscribe((res) => {
  //     });
  //   }

  // }

  goToRestaurantDetials() {
    this.location.back();
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:5001/${serverPath}`;
  }
}
