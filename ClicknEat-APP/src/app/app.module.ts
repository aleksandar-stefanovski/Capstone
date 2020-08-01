import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RestaurantService } from './services/restaurant.service';
import { RestaurantDetailsComponent } from './restaurants/restaurant-details/restaurant-details.component';
import { RestaurantAddComponent } from './restaurants/restaurant-add/restaurant-add.component';
import { RestaurantEditComponent } from './restaurants/restaurant-edit/restaurant-edit.component';
import { RestaurantCategoryComponent } from './restaurants-category/restaurant-category/restaurant-category.component';
import { RestaurantCategoryAddComponent } from './restaurants-category/restaurant-category-add/restaurant-category-add.component';
// tslint:disable-next-line: max-line-length
import { RestaurantCategoryDetailsComponent } from './restaurants-category/restaurant-category-details/restaurant-category-details.component';
import { RestaurantCategoryEditComponent } from './restaurants-category/restaurant-category-edit/restaurant-category-edit.component';
import { RegisterComponent } from './identity/register/register/register.component';
import { LoginComponent } from './identity/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    // Restaurant
    RestaurantComponent,
    RestaurantDetailsComponent,
    RestaurantAddComponent,
    RestaurantEditComponent,
    // Restaurant Category
    RestaurantCategoryComponent,
    RestaurantCategoryAddComponent,
    RestaurantCategoryDetailsComponent,
    RestaurantCategoryEditComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
