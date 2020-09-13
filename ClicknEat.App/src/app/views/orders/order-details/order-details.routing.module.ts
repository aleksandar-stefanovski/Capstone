import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../identity/auth/auth.guard';
import { OrderDetailsComponent } from './order-details.component';

const routes: Routes = [
    {
        path: '',
        component: OrderDetailsComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Order-details'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OrderDetailsRoutingModule { }
