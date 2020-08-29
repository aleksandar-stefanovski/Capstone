import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClRestaurantDetailsComponent } from './cl-restaurant-details.component';

const routes: Routes = [
    {
        path: '',
        component: ClRestaurantDetailsComponent,
        data: {
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
                path: 'product/:productId',
                loadChildren: () => import('../cl-product-details/cl-product-details.module')
                    .then(m => m.ClProductDetailsModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClRestaurantDetailsRoutingModule { }
