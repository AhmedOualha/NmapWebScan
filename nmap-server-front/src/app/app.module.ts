import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppService } from '../services/app.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScanHostsComponent } from './scan-hosts/scan-hosts.component';

import * as $ from 'jquery';
import { ResultsComponent } from './results/results.component';
import { HomeComponent } from './home/home.component'
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScanHostsComponent,
    ResultsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    routing
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
