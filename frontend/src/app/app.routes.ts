import { Routes } from '@angular/router';
import { LoginComponent } from './funcionalidades/autenticacion/login/login';
import { Lista } from './funcionalidades/blogs/lista/lista';
import { LayoutComponent } from './compartido/componentes/layout/layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'lista', component: Lista },
    ]
  },
];
