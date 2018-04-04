import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModuleRouting} from './login-routing.module';
import {LoginComponent} from './login/login.component';
import {MaterialModule} from '../_material/material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ModuleRouting,
        FormsModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
