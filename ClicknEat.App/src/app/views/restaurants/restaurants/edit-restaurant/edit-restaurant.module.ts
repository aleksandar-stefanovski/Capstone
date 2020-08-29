import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRestaurantComponent } from './edit-restaurant.component';
import { EditRestaurantRoutingModule } from './edit-restaurant.routing.module';

@NgModule({
    imports: [
        CommonModule,
        EditRestaurantRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [EditRestaurantComponent]
})

export class EditRestaurantModule { }
