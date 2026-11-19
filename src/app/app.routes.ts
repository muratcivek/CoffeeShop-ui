import { Routes } from '@angular/router';
import { Home } from '../ui-components/home/home';
import { Menu } from '../ui-components/menu/menu';
import { Login } from '../ui-components/login/login';
import { UiLayout } from './layouts/ui-layout/ui-layout';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { CategoryList } from '../admin-components/categories/category-list/category-list';
import { CategoryCreate } from '../admin-components/categories/category-create/category-create';
import { CategoryUpdate } from '../admin-components/categories/category-update/category-update';
import { authGuard } from '../guards/auth-guard';

export const routes: Routes = [

  // Login Routes
  {
    path: 'login',
    component: Login
  },

  // UI Routes
  {
    path: '',
    component: UiLayout,
    children: [
      { path: '', component: Home },
      { path: 'menu', component: Menu }
    ]
  },

  // Admin Routes
  {
    path: 'admin',
    component: AdminLayout,
    canActivate: [authGuard],
    children: [
      { path: 'categories', component: CategoryList },
      { path: 'categories/create', component: CategoryCreate },
      { path: 'categories/update', component: CategoryUpdate }
    ]
  }

];
