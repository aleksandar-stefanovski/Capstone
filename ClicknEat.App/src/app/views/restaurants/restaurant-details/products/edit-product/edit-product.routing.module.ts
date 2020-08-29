import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProductComponent } from './edit-product.component';
import { AuthGuard } from '../../../../../identity/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: EditProductComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Edit-product'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditProductRoutingModule { }
