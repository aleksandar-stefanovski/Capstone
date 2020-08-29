import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ClRestaurantDetailsRoutingModule } from './cl-restaurant-details.routing.module';
import { ClRestaurantDetailsComponent } from './cl-restaurant-details.component';

@NgModule({
    imports: [
        CommonModule,
        ClRestaurantDetailsRoutingModule
    ],
    declarations: [ClRestaurantDetailsComponent]
})

export class ClRestaurantDetailsModule { }
