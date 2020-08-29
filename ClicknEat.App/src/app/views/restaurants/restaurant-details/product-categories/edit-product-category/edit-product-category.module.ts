import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { EditProductCategoryComponent } from './edit-product-category.component';
import { EditProductCategoryRoutingModule } from './edit-product-category.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        EditProductCategoryRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [EditProductCategoryComponent]
})

export class EditProductCategoryModule {}
