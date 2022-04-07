import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { ThemeModule } from '../theme/theme.module';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    ThemeModule
  ]
})
export class WebModule { }
