import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ClProductDetailsRoutingModule } from './cl-product-details.routing.module';
import { ClProductDetailsComponent } from './cl-product-details.component';

@NgModule({
    imports: [
        CommonModule,
        ClProductDetailsRoutingModule
    ],
    declarations: [ClProductDetailsComponent]
})

export class ClProductDetailsModule { }
