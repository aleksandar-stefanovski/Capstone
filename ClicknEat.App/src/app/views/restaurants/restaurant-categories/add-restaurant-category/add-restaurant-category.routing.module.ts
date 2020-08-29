import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantCategoryComponent } from './add-restaurant-category.component';
import { AuthGuard } from '../../../../identity/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: AddRestaurantCategoryComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Add-restaurant-category'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddRestaurantCategoryRoutingModule { }
