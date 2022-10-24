import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt)

import {ROUTES} from './app.routes'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { HomeComponent } from './navigation/home/home.component';
import { InventoryService } from './inventory/parts/part.service';
import { ListPartComponent } from './inventory/parts/list/list-part.component';
import { NewPartComponent } from './inventory/parts/new/new-part.component';

import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListPartComponent,
    NewPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
