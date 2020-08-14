import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AddRestaurantCategoryComponent } from './add-restaurant-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRestaurantCategoryRoutingModule } from './add-restaurant-category.routing.module';

@NgModule({
    imports: [
        CommonModule,
        AddRestaurantCategoryRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [AddRestaurantCategoryComponent]
})

export class AddRestaurantCategoryModule { }
