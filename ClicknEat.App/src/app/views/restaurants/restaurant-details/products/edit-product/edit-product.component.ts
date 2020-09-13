import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductCategories } from '../../../../../models/restaurant/restaurant.model';
import { ProductAddEdit, GetProduct } from '../../../../../models/product/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../../../services/products.service';
import { ProductCategoryService } from '../../../../../services/product-category.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { httpHeaders } from '../../../../../../environments/environment';

@Component({
  selector: 'app-edit-product',
  templateUrl: 'edit-product.component.html',
  styleUrls: ['edit-product.component.scss']
})
export class EditProductComponent extends AddProductComponent{

  productId: any;
  productAddEdit: ProductAddEdit;
  productCategories: ProductCategories[];

public onUpdate = () => {

  return this.http.put(this.endPoint + `Admin/UpdateProduct/${this.productId}`,
    JSON.stringify(this.productAddEdit = {
      productName: this.productName,
      description: this.description,
      price: this.price,
      imagePath: this.response.dbPath,
      categoryToProductRequest: this.categoryToProductRequest
    }), httpHeaders()).subscribe(res => {
      this.goToRestaurants();
      this.isCreate = false;
    });
}
}
