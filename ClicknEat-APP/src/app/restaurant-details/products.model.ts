import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategory } from './product-category.model';

export class Products {
  id: string;
  productName: string;
  description: string;
  productCategory: {
    id: string,
    productCategoryName: string
  };

  constructor(params?: any) {
    this.id = params.id;
    this.productName = params.productName;
    this.description = params.description;
    this.productCategory = {
      id: params.productCategory.id,
      productCategoryName: params.productCategory.productCategoryName
    };
  }
}