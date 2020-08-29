import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductCategories } from '../../../../../models/restaurant/restaurant.model';
import { ProductAddEdit, GetProduct } from '../../../../../models/product/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../../../services/products.service';
import { ProductCategoryService } from '../../../../../services/product-category.service';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: '../add-product/shared-add-edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent extends AddProductComponent{

  productId: any;
  productAddEdit: ProductAddEdit = new ProductAddEdit();
  productCategories: ProductCategories[];

resetForm(form ?: NgForm) {
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

updateProduct(form: NgForm) {
  console.log('EXAMPLE', form.value);
  this.productsService.updateProduct(form.value, this.productId).subscribe(res => {
    this.resetForm(form);
    this.goToRestaurants();
  });
}

onSubmit(form: NgForm) {
  this.updateProduct(form);
}

}
