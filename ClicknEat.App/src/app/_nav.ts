import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Dashboard'
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Restaurants'
  },
  {
    name: 'Restaurants',
    url: '/restaurants',
    icon: 'icon-notebook',
  },
  {
    name: 'Restaurant Categories',
    url: '/restaurant-categories',
    icon: 'icon-list',
  },
  {
    title: true,
    name: 'Orders'
  },
  {
    name: 'Orders',
    url: '/orders',
    icon: 'icon-note',
  },
  {
    title: true,
    name: 'Profile'
  },
  {
    name: 'Profile',
    url: '/my-profile',
    icon: 'icon-user',
  },
  {
    name: 'Logout',
    url: 'log-out',
    icon: 'icon-logout',
  }

];
