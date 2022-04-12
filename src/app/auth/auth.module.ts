import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ThemeModule } from '../theme/theme.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ThemeModule
  ]
})
export class AuthModule { }
