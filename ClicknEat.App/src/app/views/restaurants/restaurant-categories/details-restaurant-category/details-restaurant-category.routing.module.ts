import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsRestaurantCategoryComponent } from './details-restaurant-category.component';

const routes: Routes = [
    {
        path: '',
        component: DetailsRestaurantCategoryComponent,
        data: {
            title: 'Details-restaurant-category'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailsRestaurantCategoryRoutingModule { }
