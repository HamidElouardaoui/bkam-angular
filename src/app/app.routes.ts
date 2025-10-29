import { Routes } from '@angular/router';

export const routes: Routes = [
 
   {
    path: '',
    loadChildren: () =>
      import('./features/shared/pages/home-page/home-page.route').then(m => m.HOME_ROUTES),
  },
  {
  
    path: 'prestations-administratives',
    loadChildren: () =>
      import('./features/prestations-administratives/prestations-administratives.route')
        .then(m => m.PRESTATIONS_ADMIN_ROUTES),
  },
  { path: '**', redirectTo: '' },
];
    

