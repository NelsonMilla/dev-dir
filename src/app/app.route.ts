import { Routes } from '@angular/router';

export const rootRouterConfig: Routes = [
  { path: '', loadChildren: () => import('./Componentes/componentes.module').then(m => m.ComponentesModule) }
];
