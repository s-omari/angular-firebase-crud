import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './crud.component';


export const RoutingComponents = [
    CrudComponent
];

const routes: Routes = [
    {
        path: '', component: CrudComponent,
    }
];

export const router: ModuleWithProviders = RouterModule.forChild(routes);
