import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos Personalizados.
import { AuthModule } from './auth/auth.module';
import { AppRoturingModule } from './app-roturing.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoturingModule,
    PagesModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
