import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sales',
        loadComponent: () => import('./components/sales/sales/sales.component').then(c => c.SalesComponent)
    },
    {
        path: 'sales/new',
        loadComponent: () => import('./components/sales/new-sales/new-sales.component').then(c => c.NewSalesComponent)
    },
    {
        path: 'customers/new',
        loadComponent: () => import('./components/customer/add-customer/add-customer.component').then(c => c.AddCustomerComponent)
    },
    {
        path: 'customers/edit/:id',
        loadComponent: () => import('./components/customer/edit-customer/edit-customer.component').then(c => c.EditCustomerComponent)
    },
    {
        path: 'user/new',
        loadComponent: () => import('./components/users/users/users.component').then(C => C.UsersComponent)
    },
    {
        path: 'user',
        loadComponent: () => import('./components/users/user-list/user-list.component').then(c => c.UserListComponent)
    },
    {
        path: 'user/edit/:id',
        loadComponent: () => import('./components/users/edit-user/edit-user.component').then(c => c.EditUserComponent)
    },
    {
        path: 'customers',
        loadComponent: () => import('./components/customer/customers-list/customers-list.component').then(c => c.CustomersListComponent)
    }
];
