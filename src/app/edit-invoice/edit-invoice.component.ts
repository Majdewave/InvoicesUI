import { Component } from '@angular/core';
import { InvoicesService } from '../Services/invoices.service';
import { invoice } from '../models/invoices.model';
import { ActivatedRoute, Router } from '@angular/router';
import {invoiceForResponse} from 'src/app/models/invoices.model';


@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent {

  invoiceDetails: invoice = {
    id:'',
    amount: 0,
    status: '',
    params: []
  };

  addInvoiceResponse: invoiceForResponse = {
    id:'',
    amount: 0,
    status: '',
    Date: new Date
  };
  InvoicesResponse: invoiceForResponse[] = []



  constructor(private invoiceService:InvoicesService, 
    private route :ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe({ // get param id from URL
      next:(params) => {
        const id = params.get('id');

        if (id)
        {
          this.invoiceDetails.id=id; // get by id 
          this.invoiceService.GetInvoices(this.invoiceDetails)
          .subscribe((value: any)=>{
           this.InvoicesResponse = value.params.invoices;
           this.InvoicesResponse= this.InvoicesResponse;
          });
           //  
        }
      }
    })
  }


  updateInvoice(){
    this.invoiceService.updateInvoice(this.invoiceDetails)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['invoice-list'])
      }
    })
  }
}
