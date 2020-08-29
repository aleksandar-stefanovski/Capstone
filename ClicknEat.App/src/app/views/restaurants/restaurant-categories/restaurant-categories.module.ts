import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RestaurantCategoriesComponent } from './restaurant-categories.component';
import { RestaurantCategoriesRoutingModule } from './restaurant-categories.routing.module';

@NgModule({
    imports: [
        CommonModule,
        RestaurantCategoriesRoutingModule
    ],
    declarations: [RestaurantCategoriesComponent]
})

export class RestaurantCategoriesModule {}
