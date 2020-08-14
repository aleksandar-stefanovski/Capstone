import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsComponent,
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
        path: 'add-restaurant',
        loadChildren: () => import('../restaurants/add-restaurant/add-restaurant.module')
          .then(m => m.AddRestaurantModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
