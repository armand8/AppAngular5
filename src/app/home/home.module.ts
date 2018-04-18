import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModuleRouting } from './home-routing.module';
import { MaterialModule } from '../_material/material.module';

@NgModule({
    imports: [
        CommonModule,
        ModuleRouting,
        MaterialModule
    ],
    declarations: [HomeComponent ]
})
export class HomeModule {
}
