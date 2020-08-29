import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductCategoryComponent } from './add-product-category.component';
import { AuthGuard } from '../../../../../identity/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: AddProductCategoryComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Add-product-category'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddProductCategoryRoutingModule { }
