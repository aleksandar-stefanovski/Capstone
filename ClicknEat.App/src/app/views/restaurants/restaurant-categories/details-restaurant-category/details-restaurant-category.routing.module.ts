import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsRestaurantCategoryComponent } from './details-restaurant-category.component';
import { AuthGuard } from '../../../../identity/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: DetailsRestaurantCategoryComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Details-restaurant-category'
        }
    },
    {
        path: '',
        data: {
            title: 'Restaurants'
        },

        children: [
            // {
            //     path: 'edit-restaurant/:id',
            //     loadChildren: () => import('../../restaurants/edit-restaurant/edit-restaurant.module')
            //         .then(m => m.EditRestaurantModule)
            // }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailsRestaurantCategoryRoutingModule { }
