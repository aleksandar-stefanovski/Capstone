import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRestaurantRoutingModule } from './add-restaurant.routing.module';
import { AddRestaurantComponent } from './add-restaurant.component';

@NgModule({
    imports: [
        CommonModule,
        AddRestaurantRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [AddRestaurantComponent]
})

export class AddRestaurantModule { }
