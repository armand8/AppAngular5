import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent}
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);
