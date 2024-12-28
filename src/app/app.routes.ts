import { Routes } from '@angular/router';

export const router: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule),
  },
];
