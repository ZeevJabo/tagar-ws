
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'about',
    title: 'About Tagar',
    loadComponent: () => import('./pages/about/about').then(m => m.About)
  }
];
