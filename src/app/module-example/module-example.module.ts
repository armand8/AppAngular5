import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleRouting } from './module-example-routing.module';
import { MaterialModule } from '../_material/material.module';
import { ComponentExampleComponent } from './component-example/component-example.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ModuleRouting
  ],
  declarations: [ComponentExampleComponent]
})
export class ModuleExampleModule { }
