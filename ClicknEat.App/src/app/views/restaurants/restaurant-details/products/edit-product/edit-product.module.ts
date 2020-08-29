import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProductComponent } from './edit-product.component';
import { EditProductRoutingModule } from './edit-product.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        EditProductRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [EditProductComponent]
})

export class EditProductModule { }
