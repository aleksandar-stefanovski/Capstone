import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditRestaurantCategoryComponent } from './edit-restaurant-category.component';
import { AuthGuard } from '../../../../identity/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: EditRestaurantCategoryComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Edit-restaurant-category'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditRestaurantCategoryRoutingModule { }
