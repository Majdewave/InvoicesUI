import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { FormsModule } from '@angular/forms';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    InvoiceListComponent,
    AddInvoiceComponent,
    EditInvoiceComponent
  ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
