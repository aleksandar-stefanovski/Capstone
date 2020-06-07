import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';


const routes: Routes = [
  {
    path: 'restaurants',
    component: RestaurantComponent,
    data: { title: 'Restaurant List' }
  },
  {
    path: 'restaurant-details/:id',
    component: RestaurantDetailsComponent,
    data: { title: 'Restaurant Details' }
  },
  {
    path: 'admin/restaurant-add',
    component: RestaurantAddComponent,
    data: { title: 'Restaurant Add' }
  },
  {
    path: 'admin/restaurant-edit/:id',
    component: RestaurantEditComponent,
    data: { title: 'Restaurant Edit' }
  },
  {
    path: '',
    redirectTo: '/Restaurants',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
