import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sales',
        loadComponent: () => import('./components/sales/sales.component').then(c => c.SalesComponent)
    },
    {
        path: 'customers',
        loadComponent: () => import('./components/customers/customers.component').then(c => c.CustomersComponent)
    },
    {
        path: 'users',
        loadComponent: () => import('./components/users/users.component').then(C => C.UsersComponent)
    }
];
