import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditRestaurantCategoryComponent } from './edit-restaurant-category.component';

const routes: Routes = [
    {
        path: '',
        component: EditRestaurantCategoryComponent,
        data: {
            title: 'Edit-restaurant-category'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditRestaurantCategoryRoutingModule { }
