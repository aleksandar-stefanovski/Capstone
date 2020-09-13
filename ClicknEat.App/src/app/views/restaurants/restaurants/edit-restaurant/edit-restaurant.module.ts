import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRestaurantComponent } from './edit-restaurant.component';
import { EditRestaurantRoutingModule } from './edit-restaurant.routing.module';
import { UpdateRestaurantImgComponent } from '../../../upload/update-restaurant-img/upload.component';

@NgModule({
    imports: [
        CommonModule,
        EditRestaurantRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [EditRestaurantComponent, UpdateRestaurantImgComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class EditRestaurantModule { }
