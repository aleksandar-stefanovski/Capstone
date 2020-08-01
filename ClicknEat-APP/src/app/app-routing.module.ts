import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantComponent } from 'src/app/restaurants/restaurant/restaurant.component';
import { RestaurantDetailsComponent } from 'src/app/restaurants/restaurant-details/restaurant-details.component';
import { RestaurantAddComponent } from 'src/app/restaurants/restaurant-add/restaurant-add.component';
import { RestaurantEditComponent } from 'src/app/restaurants/restaurant-edit/restaurant-edit.component';
import { RestaurantCategoryComponent } from './restaurants-category/restaurant-category/restaurant-category.component';
// tslint:disable-next-line: max-line-length
import { RestaurantCategoryDetailsComponent } from './restaurants-category/restaurant-category-details/restaurant-category-details.component';
import { RestaurantCategoryAddComponent } from './restaurants-category/restaurant-category-add/restaurant-category-add.component';
import { RestaurantCategoryEditComponent } from './restaurants-category/restaurant-category-edit/restaurant-category-edit.component';
import { LoginComponent } from './identity/login/login/login.component';
import { RegisterComponent } from './identity/register/register/register.component';


const routes: Routes = [
  // //// Identity //// //
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  // //// Restaurants //// //
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
  }, // //// Restaurant Categories //// //
  {
    path: 'restaurant-categories',
    component: RestaurantCategoryComponent,
    data: { title: 'Restaurant Categories List' }
  },
  {
    path: 'restaurant-category-details/:id',
    component: RestaurantCategoryDetailsComponent,
    data: { title: 'Restaurant Category Details' }
  },
  {
    path: 'admin/restaurant-category-add',
    component: RestaurantCategoryAddComponent,
    data: { title: 'Restaurant Category Add' }
  },
  {
    path: 'admin/restaurant-category-edit/:id',
    component: RestaurantCategoryEditComponent,
    data: { title: 'Restaurant Category Edit' }
  },
  {
    path: '',
    redirectTo: '/restaurants',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
