import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
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
        path: 'restaurant/:id',
        loadChildren: () => import('../../client/cl-restaurant-details/cl-restaurant-details.module')
        .then(m => m.ClRestaurantDetailsModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
