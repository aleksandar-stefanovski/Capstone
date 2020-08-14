import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RestaurantDetailsRoutingModule } from './restaurant-details.routing.module';
import { RestaurantDetailsComponent } from './restaurant-details.component';

@NgModule({
    imports: [
        CommonModule,
        RestaurantDetailsRoutingModule,
    ],
    declarations: [RestaurantDetailsComponent]
})

export class RestaurantDetailsModule {}
