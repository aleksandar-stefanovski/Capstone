import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DetailsRestaurantCategoryRoutingModule } from './details-restaurant-category.routing.module';
import { RestaurantDetailsComponent } from '../../restaurant-details/restaurant-details.component';
import { DetailsRestaurantCategoryComponent } from './details-restaurant-category.component';

@NgModule({
    imports: [
        CommonModule,
        DetailsRestaurantCategoryRoutingModule
    ],
    declarations: [DetailsRestaurantCategoryComponent]
})

export class DetailsRestaurantCategoryModule {}
