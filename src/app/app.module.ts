import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MainComponent, LoginComponent, AdminComponent } from "./components";
import { ServerRequests, AdminGuardService } from "./services";

@NgModule({
  declarations: [
    AppComponent, AdminComponent, MainComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ ServerRequests, AdminGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
