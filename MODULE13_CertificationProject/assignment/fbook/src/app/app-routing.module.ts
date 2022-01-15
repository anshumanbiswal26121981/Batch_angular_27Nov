import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './components/friends/friends.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { NetworkComponent } from './components/network/network.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ForgotPasswordComponent } from './components/user/forgot-password/forgot-password.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'network',
    component: NetworkComponent
  },
  {
    path: 'friends',
    component: FriendsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
