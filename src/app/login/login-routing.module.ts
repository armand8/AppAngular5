import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent}
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);
