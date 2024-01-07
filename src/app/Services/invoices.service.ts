import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http: HttpClient) { }
 
  // getAllInvoices(){
  //     this.http.post("http://localhost:4200/",)

  // }
}
