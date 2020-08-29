import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditRestaurantComponent } from './edit-restaurant.component';
import { AuthGuard } from '../../../../identity/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: EditRestaurantComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['Admin'],
            title: 'Edit-restaurant'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditRestaurantRoutingModule { }
