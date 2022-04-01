import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutComponent } from '@nebular/theme';

const NB_MODULES = [
  NbLayoutComponent
];

const COMPONENTS = [];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ...NB_MODULES
  ],
  exports: [
    ...NB_MODULES
  ]
})
export class ThemeModule { }
