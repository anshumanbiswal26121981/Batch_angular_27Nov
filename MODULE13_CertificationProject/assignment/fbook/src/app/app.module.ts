import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { FriendsComponent } from './components/friends/friends.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/home/posts/posts.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NetworkComponent } from './components/network/network.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    HomeComponent,
    NavbarComponent,
    NetworkComponent,
    SettingsComponent,
    UserComponent,
    UsersComponent,
    DashboardComponent,
    PostsComponent,
    ProfileComponent,
    BaseComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegistrationComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
