import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleRouting } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ModuleRouting
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
