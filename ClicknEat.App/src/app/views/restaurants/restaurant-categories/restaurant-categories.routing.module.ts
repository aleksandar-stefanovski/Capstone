import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantCategoriesComponent } from './restaurant-categories.component';
import { AuthGuard } from '../../../identity/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: RestaurantCategoriesComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Restaurant-categories'
        }
    },
    {
        path: '',
        data: {
            title: 'Restaurant-categories'
        },
        children: [
            {
                path: 'add-restaurant-category',
                loadChildren: () => import('../restaurant-categories/add-restaurant-category/add-restaurant-category.module')
                    .then(m => m.AddRestaurantCategoryModule)
            },
            {
                path: 'restaurant-category-details/:id',
                loadChildren: () => import('../restaurant-categories/details-restaurant-category/details-restaurant-category.module')
                    .then(m => m.DetailsRestaurantCategoryModule)
            },
            {
                path: 'restaurant-category-edit/:id',
                loadChildren: () => import('../restaurant-categories/edit-restaurant-category/edit-restaurant-category.module')
                    .then(m => m.EditRestaurantCategoryModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RestaurantCategoriesRoutingModule { }
