import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleRouting } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { UserService}  from './_services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterceptor } from './_helpers/fake_backend'
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './_guards/index';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ModuleRouting,
        LoginModule,
        HomeModule,
        HttpClientModule
    ],
    providers: [UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: FakeBackendInterceptor,
            multi: true
        },
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
