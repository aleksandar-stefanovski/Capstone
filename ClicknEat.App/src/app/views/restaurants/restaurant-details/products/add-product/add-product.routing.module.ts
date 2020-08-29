import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product.component';
import { AuthGuard } from '../../../../../identity/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: AddProductComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Add-product'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddProductRoutingModule { }
