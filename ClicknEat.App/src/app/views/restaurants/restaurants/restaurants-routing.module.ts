import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants.component';
import { AuthGuard } from '../../../identity/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsComponent,
    canActivate: [AuthGuard],
    data: {
      permittedRoles: ['Admin'],
      title: 'Restaurants'
    }
  },
  {
    path: '',
    data: {
      title: 'Restaurants'
    },
    children: [
      {
        path: 'add-restaurant',
        loadChildren: () => import('../restaurants/add-restaurant/add-restaurant.module')
          .then(m => m.AddRestaurantModule)
      },
      {
        path: 'edit-restaurant/:id',
        loadChildren: () => import('../restaurants/edit-restaurant/edit-restaurant.module')
          .then(m => m.EditRestaurantModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
