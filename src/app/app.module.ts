import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleRouting } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { ModuleExampleModule } from './module-example/module-example.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ModuleRouting,
    LoginModule,
    ModuleExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
