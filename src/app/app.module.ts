import { ImageService } from './image.service';
import { PizzaComponent } from './Pizza/pizza.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PanelModule, LightboxModule, InputTextModule, ButtonModule, DropdownModule } from 'primeng/primeng';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LightboxModule,
    InputTextModule,
    ButtonModule,
    Angular2FontawesomeModule,
    DropdownModule,
    CommonModule,
    PanelModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
