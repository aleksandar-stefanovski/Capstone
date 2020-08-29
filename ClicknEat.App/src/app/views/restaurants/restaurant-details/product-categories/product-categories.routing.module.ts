import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoriesComponent } from './product-categories.component';
import { AuthGuard } from '../../../../identity/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: ProductCategoriesComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Product-categories'
        }
    },
    {
        path: '',
        data: {
            title: 'Product-categories'
        },
        children: [
            {
                path: 'add-product-category',
                loadChildren: () => import('../product-categories/add-product-category/add-product-category.module')
                    .then(m => m.AddProductCategoryModule)
            },
            {
                path: 'product-category-details/:id',
                loadChildren: () => import('../product-categories/details-product-category/details-product-category.module')
                    .then(m => m.DetailsProductCategoryModule)
            },
            {
                path: 'product-category-edit/:id',
                loadChildren: () => import('../product-categories/edit-product-category/edit-product-category.module')
                    .then(m => m.EditProductCategoryModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductCategoriesRoutingModule { }
