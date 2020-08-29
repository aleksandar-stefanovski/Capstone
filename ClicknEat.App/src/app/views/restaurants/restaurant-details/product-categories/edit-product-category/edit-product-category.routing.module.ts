import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProductCategoryComponent } from './edit-product-category.component';
import { AuthGuard } from '../../../../../identity/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: EditProductCategoryComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Edit-product-category'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditProductCategoryRoutingModule { }
