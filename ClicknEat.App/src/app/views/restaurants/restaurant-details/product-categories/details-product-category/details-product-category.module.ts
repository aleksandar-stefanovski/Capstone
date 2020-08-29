import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsProductCategoryComponent } from './details-product-category.component';
import { DetailsProductCategoryRoutingModule } from './details-product-category.routing.module';

@NgModule({
    imports: [
        CommonModule,
        DetailsProductCategoryRoutingModule
    ],
    declarations: [DetailsProductCategoryComponent]
})

export class DetailsProductCategoryModule {}
