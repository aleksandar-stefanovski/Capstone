import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AddProductRoutingModule } from './add-product.routing.module';
import { AddProductComponent } from './add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadProductImgComponent } from '../../../../upload/upload-product-img/upload.component';

@NgModule({
    imports: [
        CommonModule,
        AddProductRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [AddProductComponent, UploadProductImgComponent]
})

export class AddProductModule { }
