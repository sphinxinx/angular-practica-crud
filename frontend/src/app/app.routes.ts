import { Routes } from '@angular/router';
import { HomeComponent } from './pages/HomeComponent/home.component';
import { ButtonStyleDirective } from './shared/button-style.directive';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'test', component: ButtonStyleDirective },
];
