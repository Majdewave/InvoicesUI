import { Component, OnInit } from '@angular/core';
import {invoice, invoiceForResponse} from 'src/app/models/invoices.model';
import { InvoicesService } from '../Services/invoices.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  
  addInvoiceRequest: invoice = {
    id:'',
    amount: 0,
    status: '',
   params:[]
  };
  addInvoiceResponse: invoiceForResponse = {
    id:'',
    amount: 0,
    status: '',
    Date: new Date
    
  };
  InvoicesResponse: invoiceForResponse[] = []

  Invoices: invoice[] = [



    /*
    {
      id:'034665927',
      amount: 1000,
      status: 'Paid',
      Date: new Date("Fri Dec 08 2024 07:44:57")

    },
    {
      id:'034665837',
      amount: 1530,
      status: '',
      Date: new Date("Sunday Dec 11 2024 07:44:57")
    }
    */
   
  ];

  constructor(private invoiceService:InvoicesService){}

  ngOnInit(): void {
     // this.Invoices.push()
     this.addInvoiceRequest.id ="";
     this.invoiceService.GetAllInvoices(this.addInvoiceRequest,this.addInvoiceResponse)
     .subscribe((value: any)=>{
      this.InvoicesResponse = value.params.invoices;
      this.InvoicesResponse= this.InvoicesResponse;
     });
      //  next:(invoice)=>{
      //    console.log(invoice);
      //    this.Invoices = this.Invoices;
      //  },
      //  error:(Response) =>{
      //   console.log(this.Invoices); 
      
      //  }
   //  })
  }

}
