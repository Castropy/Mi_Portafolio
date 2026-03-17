import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { PrivacyPolicy } from './components/privacy-policy.component/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz (vacia) carga el Home
  { path: 'privacy-policy', component: PrivacyPolicy  } //Ruta para la política de privacidad de recetas app
];