import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../_guards/index';

const routes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);
