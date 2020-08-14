import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { EditRestaurantCategoryRoutingModule } from './edit-restaurant-category.routing.module';
import { EditRestaurantCategoryComponent } from './edit-restaurant-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        EditRestaurantCategoryRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [EditRestaurantCategoryComponent]
})

export class EditRestaurantCategoryModule {}
