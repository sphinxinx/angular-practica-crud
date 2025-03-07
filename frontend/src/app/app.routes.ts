import { Routes } from '@angular/router';
import { HomeComponent } from './pages/HomeComponent/home.component';
import { CrudTableComponentComponent } from './shared/components/crud-table-component/crud-table-component.component';
import { CreateComponent } from './shared/components/create/create.component';
import { DetailComponent } from './shared/components/detail/detail.component';
import { EditComponent } from './shared/components/edit/edit.component';
import { DeleteComponent } from './shared/components/delete/delete.component';
import { PruebaComponent } from './pages/prueba/prueba.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crud', component: CrudTableComponentComponent },
  { path: 'create', component: CreateComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'delete/:id', component: DeleteComponent },
  { path: 'prueba', component: PruebaComponent },
];
