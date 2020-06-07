import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { RestaurantService } from './restaurant.service';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantDetailsComponent,
    RestaurantAddComponent,
    RestaurantEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
