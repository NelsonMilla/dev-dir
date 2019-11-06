import { Routes } from '@angular/router';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { LandingComponent } from './landing/landing.component';

export const ComponentesRutas: Routes = [
  { path:  '', redirectTo:  'home', pathMatch:  'full' },
  { path: 'home', component: LandingComponent},
  { path: 'registrarse', component: RegistrarseComponent  },
  { path: 'ingresar', component: IngresarComponent}
];

