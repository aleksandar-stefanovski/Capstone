import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../identity/auth/auth.guard';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
    {
        path: '',
        component: OrdersComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Orders'
        }
    },
    {
        path: '',
        data: {
            title: 'Orders'
        },
        children: [
            {
                path: 'order-details/:id',
                loadChildren: () => import('./order-details/order-details.module')
                    .then(m => m.OrderDetailsModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OrdersRoutingModule { }
