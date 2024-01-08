import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import {  EditInvoiceComponent } from './edit-invoice/edit-invoice.component';



const routes: Routes = [
  {path:'', component:InvoiceListComponent},
  {path:'invoice-list', component:InvoiceListComponent},
  {path:'invoices/add', component:AddInvoiceComponent},
  {path:'invoices/edit/:id', component:EditInvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
