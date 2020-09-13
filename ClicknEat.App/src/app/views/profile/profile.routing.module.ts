import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../identity/auth/auth.guard';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        data: {
            permittedRoles: ['User'],
            title: 'My-orders'
        }
    },
    {
        path: '',
        data: {
            title: 'My-orders'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfileRoutingModule { }
