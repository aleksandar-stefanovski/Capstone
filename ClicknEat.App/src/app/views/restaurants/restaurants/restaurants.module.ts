import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { FormsModule } from '@angular/forms';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';

@NgModule({
    imports: [
        CommonModule,
        RestaurantsRoutingModule
    ],
    declarations: [RestaurantsComponent, EditRestaurantComponent]
})

export class RestaurantsModule { }
