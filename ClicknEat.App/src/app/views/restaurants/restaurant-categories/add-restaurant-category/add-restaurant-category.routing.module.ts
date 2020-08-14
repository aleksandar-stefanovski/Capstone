import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantCategoryComponent } from './add-restaurant-category.component';

const routes: Routes = [
    {
        path: '',
        component: AddRestaurantCategoryComponent,
        data: {
            title: 'Add-restaurant-category'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddRestaurantCategoryRoutingModule { }
