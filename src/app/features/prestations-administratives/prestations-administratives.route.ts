import { Routes } from '@angular/router';
import { PrestationsAdministrativesPage } from './prestations-administratives-index/pages/prestations-administratives-page/prestations-administratives-page';

export const PRESTATIONS_ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: PrestationsAdministrativesPage,  // dashboard
    // children: [
    //   {
    //     path: 'situation-famille',
    //     loadChildren: () =>
    //       import('./situation-famille/pages/situation-famille-page/situation-famille-page.route')
    //         .then(m => m.SITUATION_FAMILLE_ROUTES),
    //   },
    //   // ... other children
    // ],
  },
  {
    path: 'situation-famille',
    loadChildren: () =>
        import('./situation-famille/pages/situation-famille-page/situation-famille-page.route')
        .then(m => m.SITUATION_FAMILLE_ROUTES),
  },
];