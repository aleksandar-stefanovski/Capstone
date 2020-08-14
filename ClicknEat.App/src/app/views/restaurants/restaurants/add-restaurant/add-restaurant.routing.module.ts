import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant.component';

const routes: Routes = [
    {
        path: '',
        component: AddRestaurantComponent,
        data: {
            title: 'Add-restaurant'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddRestaurantRoutingModule { }
