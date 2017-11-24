import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// PrimeNG
import { ButtonModule } from 'primeng/components/button/button';
import { MenubarModule } from 'primeng/components/menubar/menubar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MainComponent, LoginComponent, AdminComponent } from "./components";
import { ServerRequests, AdminGuardService } from "./services";

@NgModule({
  declarations: [
    AppComponent, AdminComponent, MainComponent, LoginComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpModule, FormsModule, AppRoutingModule, ButtonModule, MenubarModule
  ],
  providers: [ ServerRequests, AdminGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
