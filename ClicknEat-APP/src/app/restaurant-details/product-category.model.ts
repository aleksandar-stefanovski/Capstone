import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from './products.model';

export class ProductCategory {
    id: string;
    productCategoryName: string;

    constructor(params?: any) {
        this.id = params.id;
        this.productCategoryName = params.productCategoryName;
    }
}
