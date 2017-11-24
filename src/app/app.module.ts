import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AccordionModule, ButtonModule, ChipsModule } from 'primeng/primeng';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    ButtonModule,
    ChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
