import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsProductComponent } from './details-product.component';
import { DetailsProductRoutingModule } from './details-product.routing.module';

@NgModule({
    imports: [
        CommonModule,
        DetailsProductRoutingModule
    ],
    declarations: [DetailsProductComponent]
})

export class DetailsProductModule { }
