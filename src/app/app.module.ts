import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth.guard';
import { AlertComponent } from './components/alert.component';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { routing } from './app.routing';
import { AppConfig } from './app.config';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AppConfig,
    UserService,
    AuthGuard,
    AuthenticationService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
