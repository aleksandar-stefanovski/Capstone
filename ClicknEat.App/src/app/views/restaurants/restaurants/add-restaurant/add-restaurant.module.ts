import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRestaurantRoutingModule } from './add-restaurant.routing.module';
import { AddRestaurantComponent } from './add-restaurant.component';
import { UploadRestaurantImgComponent } from '../../../upload/upload-restaurant-img/upload.component';

@NgModule({
    imports: [
        CommonModule,
        AddRestaurantRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [AddRestaurantComponent, UploadRestaurantImgComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class AddRestaurantModule { }
