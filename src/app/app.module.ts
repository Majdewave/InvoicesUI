import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    InvoiceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
