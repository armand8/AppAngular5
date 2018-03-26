import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ComponentExampleComponent } from './component-example/component-example.component';

const routes: Routes = [
  {path: 'foo', component: ComponentExampleComponent}
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);
