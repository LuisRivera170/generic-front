import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ThemeModule } from '../theme/theme.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestPasswordComponent } from './components/request-password/request-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RequestPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    NbAuthModule,
    RouterModule,
    ThemeModule
  ]
})
export class AuthModule { }
