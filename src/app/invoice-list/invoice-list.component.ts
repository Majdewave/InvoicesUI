import { Component, OnInit } from '@angular/core';
import {invoice} from 'src/app/models/invoices.model';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
    date = new Date();
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

  constructor(){}

  ngOnInit(): void {
      this.Invoices.push()
  }

}
