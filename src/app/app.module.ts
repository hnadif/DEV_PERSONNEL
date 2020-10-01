import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './compenents/user/user.component';
import { AuthComponent } from './compenents/auth/auth.component';
import { DetailsComponent } from './compenents/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AuthComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
