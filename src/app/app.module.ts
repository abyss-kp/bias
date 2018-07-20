import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule,Routes, Router } from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http"
import { Common } from './commonservice';
import { ForgotComponent } from './forgot/forgot.component';
const routes:Routes=[
  {path:'',component:MainComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'reset',component:ForgotComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    MainComponent,
    ProfileComponent,
    NavbarComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FormsModule,HttpClientModule
  ],
  providers: [Common],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
