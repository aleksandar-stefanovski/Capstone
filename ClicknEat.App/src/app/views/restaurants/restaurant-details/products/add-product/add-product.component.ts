import { Component, OnInit } from '@angular/core';
import { ProductCategories } from '../../../../../models/restaurant/restaurant.model';
import { ProductsService } from '../../../../../services/products.service';

import { ProductCategoryService } from '../../../../../services/product-category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductAddEdit } from '../../../../../models/product/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './shared-add-edit-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  id: any;
  productId: any;
  productAddEdit: ProductAddEdit = new ProductAddEdit();
  productCategories: ProductCategories[];

  constructor(public productsService: ProductsService, public productCategoryService: ProductCategoryService,
    public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    this.getProductCategories();
    console.log('TESTT:', this.productAddEdit);
    console.log('TESTT2222:', this.productCategories);
  }

  getProductCategories() {
    this.id = this.route.snapshot.params['id'];
    this.productCategories = [];
    this.productCategoryService.getProductCategories(this.id).subscribe((res: any) => {
      this.productCategories = res as ProductCategories[];

      console.log('From Component getProductCategories', this.productCategories);
    });
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.productAddEdit = {
      productName: '',
      description: '',
      price: null,
      categoryToProductRequest: null
    };
  }

  createProduct(form: NgForm) {
    console.log('EXAMPLE', form.value);
    this.productsService.createProduct(this.id, form.value).subscribe(res => {
      this.resetForm(form);
      this.goToRestaurants();
    });
  }

  onSubmit(form: NgForm) {
    this.createProduct(form);
  }

  goToRestaurants() {
    this.router.navigate(['/restaurant-details/' + this.id]);
  }
}
