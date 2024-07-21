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
        path: 'add-customers',
        loadComponent: () => import('./components/add-customer/add-customer.component').then(c => c.AddCustomerComponent)
    },
    {
        path: 'users',
        loadComponent: () => import('./components/users/users.component').then(C => C.UsersComponent)
    },
    {
        path: 'customer-list',
        loadComponent: () => import('./components/customers-list/customers-list.component').then(c => c.CustomersListComponent)
    }
];
