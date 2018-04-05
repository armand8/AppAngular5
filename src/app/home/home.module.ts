import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {ModuleRouting} from './home-routing.module'

@NgModule({
    imports: [
        CommonModule,
        ModuleRouting
    ],
    declarations: [HomeComponent ]
})
export class HomeModule {
}
