import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant.component';
// import { EditRestaurantComponent } from '../edit-restaurant/edit-restaurant.component';
import { AuthGuard } from '../../../../identity/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: AddRestaurantComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Add-restaurant'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddRestaurantRoutingModule { }
