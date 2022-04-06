import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule } from '@nebular/theme';
import { HeaderComponent } from './components/header/header.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';


const NB_MODULES = [
  NbLayoutModule,
  NbEvaIconsModule
];

const COMPONENTS = [
  HeaderComponent,
  BaseLayoutComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ...NB_MODULES
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ThemeModule { }
