import { Routes } from '@angular/router';
import { LoginComponent } from './ui/auth/login/login';
import { List } from './ui/blog/list/list';
import { LayoutComponent } from './shared/componentes/layout/layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent // ✅ standalone + FormsModule ya importado en el propio componente
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'lista', component: List }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
