import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule } from '@nebular/theme';
import { HeaderComponent } from './components/header/header.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const NB_MODULES = [
  NbButtonModule,
  NbCardModule,
  NbEvaIconsModule,
  NbIconModule,
  NbLayoutModule
];

const NB_MODULES_EXPORTS = [
  NbCardModule,
  NbButtonModule
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
    ...COMPONENTS,
    ...NB_MODULES_EXPORTS
  ]
})
export class ThemeModule { }
