import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { P400Component } from './views/error/400.component';
import { RegisterComponent } from './identity/register/register.component';
import { LoginComponent } from './identity/login/login.component';
import { AuthGuard } from './identity/auth/auth.guard';
import { P403Component } from './views/error/403.component';
import { ClientLayoutComponent } from './containers/client-layout/client-layout.component';

// export function IsLogged() {
//   const jwt = localStorage.getItem('token');
//   if (jwt != null) {
//     const jwtData = jwt.split('.')[1];
//     const decodedJwtJsonData = window.atob(jwtData);
//     const decodedJwtData = JSON.parse(decodedJwtJsonData);
//     const role = decodedJwtData.role;

//     if (role === 'Admin') {
//       return 'dashboard';
//     } else if (role === 'User') {
//       return 'home';
//     } else {
//       return 'home';
//     }
//   }
// }

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '400',
    component: P400Component,
    data: {
      title: 'Page 400'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '403',
    component: P403Component,
    data: {
      title: 'Page 403'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: ClientLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        loadChildren: () => import('./views/client/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'my-orders',
        loadChildren: () => import('./views/profile/profile.module')
          .then(m => m.ProfileModule)
      }
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      permittedRoles: ['Admin'],
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'restaurants',
        loadChildren: () => import('./views/restaurants/restaurants/restaurants.module').then(m => m.RestaurantsModule)
      },
      {
        path: 'restaurant-details/:id',
        loadChildren: () => import('./views/restaurants/restaurant-details/restaurant-details.module').then(m => m.RestaurantDetailsModule)
      },
      {
        path: 'restaurant-categories',
        loadChildren: () => import('./views/restaurants/restaurant-categories/restaurant-categories.module')
          .then(m => m.RestaurantCategoriesModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./views/orders/orders.module')
          .then(m => m.OrdersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
