import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsProductCategoryComponent } from './details-product-category.component';
import { AuthGuard } from '../../../../../identity/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: DetailsProductCategoryComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Details-product-category'
        }
    },
    {
        path: '',
        data: {
            title: 'Details-product-category'
        },
        children: [
            {
                path: 'product-details/:productId',
                loadChildren: () => import('../../products/details-product/details-product.module')
                    .then(m => m.DetailsProductModule)
            },
            {
                path: 'product-edit/:productId',
                loadChildren: () => import('../../products/edit-product/edit-product.module')
                    .then(m => m.EditProductModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailsProductCategoryRoutingModule { }
