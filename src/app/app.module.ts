import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./component/navbar/navbar.component";
import {AppRoutingModule} from "./app-routing.module";
import {PortailComponent} from "./component/Portail/portail.component";
import {RouterModule} from "@angular/router";
import {BaseComponent} from "./component/base/base.component";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    PortailComponent,
    BaseComponent,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
