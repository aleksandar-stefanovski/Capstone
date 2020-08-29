import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AddProductRoutingModule } from './add-product.routing.module';
import { AddProductComponent } from './add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        AddProductRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [AddProductComponent]
})

export class AddProductModule { }
