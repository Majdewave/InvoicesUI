import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { invoice, invoiceForResponse } from '../models/invoices.model';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }
 
  GetAllInvoices(addInvoiceRequest: invoice, addInvoiceResponse:invoiceForResponse):Observable<invoice>{
    addInvoiceRequest.id=""; // in server side, when you don't send id, you will get all Invoices
    return this.http.post<invoice>(this.baseApiUrl+'/GetInvoices', addInvoiceRequest);
  }
  GetInvoices(addInvoiceRequest: invoice):Observable<invoice>{
    return this.http.post<invoice>(this.baseApiUrl+'/GetInvoices', addInvoiceRequest);
  }

  addInvoice(addInvoiceRequest: invoice):Observable<invoice>{
    return this.http.post<invoice>(this.baseApiUrl+'/SetInvoices',addInvoiceRequest);
  }

  updateInvoice(updateInvoiseRequest: invoice):Observable<invoice>{
    return this.http.put<invoice>(this.baseApiUrl+'/UpdateInvoices', updateInvoiseRequest);
  }

}
