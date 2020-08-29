import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductCategoriesRoutingModule } from './product-categories.routing.module';
import { ProductCategoriesComponent } from './product-categories.component';

@NgModule({
    imports: [
        CommonModule,
        ProductCategoriesRoutingModule
    ],
    declarations: [ProductCategoriesComponent]
})

export class ProductCategoriesModule {}
