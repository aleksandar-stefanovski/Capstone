import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClProductDetailsComponent } from './cl-product-details.component';

const routes: Routes = [
    {
        path: '',
        component: ClProductDetailsComponent,
        data: {
            title: 'Product-details'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClProductDetailsRoutingModule { }
