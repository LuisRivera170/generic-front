import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbMenuModule, NbThemeModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    NbAuthModule.forRoot({
      strategies: [
        NbDummyAuthStrategy.setup(
          {
            name: 'email'
          }
        )
      ],
      forms: {}
    }),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
