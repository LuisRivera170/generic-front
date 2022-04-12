import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
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
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule
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
