import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantDetailsComponent } from './restaurant-details.component';
import { AuthGuard } from '../../../identity/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: RestaurantDetailsComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Restaurant-details'
        }
    },
    {
        path: '',
        data: {
            title: 'Restaurant-details'
        },
        children: [
            {
                path: 'product-add',
                loadChildren: () => import('./products/add-product/add-product.module')
                    .then(m => m.AddProductModule)
            },
            {
                path: 'product-details/:productId',
                loadChildren: () => import('./products/details-product/details-product.module')
                    .then(m => m.DetailsProductModule)
            },
            {
                path: 'product-edit/:productId',
                loadChildren: () => import('./products/edit-product/edit-product.module')
                    .then(m => m.EditProductModule)
            },
            {
                path: 'product-categories',
                loadChildren: () => import('./product-categories/product-categories.module')
                    .then(m => m.ProductCategoriesModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RestaurantDetailsRoutingModule { }
