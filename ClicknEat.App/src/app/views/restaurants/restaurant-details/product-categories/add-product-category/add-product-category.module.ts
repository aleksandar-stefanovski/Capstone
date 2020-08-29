import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductCategoryRoutingModule } from './add-product-category.routing.module';
import { AddProductCategoryComponent } from './add-product-category.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        AddProductCategoryRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [AddProductCategoryComponent]
})

export class AddProductCategoryModule {}
