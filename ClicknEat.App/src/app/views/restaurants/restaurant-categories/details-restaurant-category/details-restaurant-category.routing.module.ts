import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsRestaurantCategoryComponent } from './details-restaurant-category.component';
import { AuthGuard } from '../../../../identity/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: DetailsRestaurantCategoryComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Details-restaurant-category'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailsRestaurantCategoryRoutingModule { }
