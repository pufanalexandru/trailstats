import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// PrimeNG
import { ButtonModule } from 'primeng/components/button/button';
import { MenubarModule } from 'primeng/components/menubar/menubar';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { MessageModule } from "primeng/components/message/message";
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { PanelModule } from 'primeng/components/panel/panel';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { TabMenuModule } from 'primeng/components/tabmenu/tabmenu';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MainComponent, ListsComponent, GraphsComponent, LoginComponent, AdminComponent, TrailTablesComponent } from "./components";
import { ServerRequests, AdminGuardService, UtilitiesService } from "./services";

@NgModule({
  declarations: [
    AppComponent, AdminComponent, MainComponent, LoginComponent, ListsComponent, GraphsComponent, TrailTablesComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpModule, FormsModule, AppRoutingModule, ButtonModule, MenubarModule, DataTableModule, MessageModule, CheckboxModule, PanelModule, TooltipModule, TabMenuModule
  ],
  providers: [ ServerRequests, AdminGuardService, UtilitiesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
