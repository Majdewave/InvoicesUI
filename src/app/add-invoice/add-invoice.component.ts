import { Component, OnInit } from '@angular/core';
import { invoice } from '../models/invoices.model';
import { InvoicesService } from '../Services/invoices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

    addInvoiceRequest: invoice = {
      id:'',
      amount: 0,
      status: '',
      params: []
    };

    constructor(private invoiceService:InvoicesService,
      private route :ActivatedRoute, private router: Router){ }


    ngOnInit(): void {}

    addInvoice(){
      this.invoiceService.addInvoice(this.addInvoiceRequest)
      .subscribe({
        next:(invoice)=>{
          this.router.navigate(['invoice-list'])
          console.log(invoice);
        }
      })
    }
}
