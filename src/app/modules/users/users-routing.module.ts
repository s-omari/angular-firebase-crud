import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';


export const RoutingComponents = [
    UsersComponent
];

const routes: Routes = [
    {
        path: '', component: UsersComponent,
    }
];

export const router: ModuleWithProviders = RouterModule.forChild(routes);
