import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path:  '', redirectTo:  'home', pathMatch:  'full' },
  { path: 'home', component: LandingComponent},
  { path: 'registrarse', component: RegistrarseComponent  },
  { path: 'ingresar', component: IngresarComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
