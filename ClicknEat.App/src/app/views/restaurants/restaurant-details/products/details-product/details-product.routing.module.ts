import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsProductModule } from './details-product.module';
import { DetailsProductComponent } from './details-product.component';
import { AuthGuard } from '../../../../../identity/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: DetailsProductComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Product-details'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailsProductRoutingModule { }
