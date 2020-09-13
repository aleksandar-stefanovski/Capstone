import { Component, OnInit } from '@angular/core';
import { ProductCategories } from '../../../../../models/restaurant/restaurant.model';
import { ProductsService } from '../../../../../services/products.service';

import { ProductCategoryService } from '../../../../../services/product-category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductAddEdit } from '../../../../../models/product/product.model';
import { HttpClient } from '@angular/common/http';
import { httpHeaders } from '../../../../../../environments/environment';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  endPoint = 'https://localhost:5001/api/v1/';

  id: any;
  productId: any;

  productAddEdit: ProductAddEdit;
  productCategories: ProductCategories[];

  public productName?: string;
  public description?: string;
  public price?: number;
  public imagePath?: string;
  public categoryToProductRequest?: any;
  public isCreate?: boolean;
  public response?: { dbPath: '' };

  constructor(public http: HttpClient, public productsService: ProductsService,
    public productCategoryService: ProductCategoryService,public route: ActivatedRoute, public router: Router) { }


  ngOnInit(): void {
    this.isCreate = true;
    this.productId = this.route.snapshot.params['productId'];
    this.getProductCategories();
  }

  getProductCategories() {
    this.id = this.route.snapshot.params['id'];
    this.productCategories = [];
    this.productCategoryService.getProductCategories(this.id).subscribe((res: any) => {
      this.productCategories = res as ProductCategories[];

      console.log('From Component getProductCategories', this.productCategories);
    });
  }

  goToRestaurants() {
    this.router.navigate(['/restaurant-details/' + this.id]);
  }

  public onCreate = () => {
    return this.http.post(this.endPoint + `Admin/${this.id}/CreateProduct`,
      JSON.stringify(this.productAddEdit = {
        productName: this.productName,
        description: this.description,
        price: this.price,
        categoryToProductRequest: this.categoryToProductRequest,
        imagePath: this.response.dbPath
      }), httpHeaders()).subscribe(res => {
        this.goToRestaurants();
        this.isCreate = false;
      });
  }

  public uploadFinished = (event) => {
    this.response = event;
  }

}
