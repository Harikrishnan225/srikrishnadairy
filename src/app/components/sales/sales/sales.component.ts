import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StorageService } from '../../../services/storage/storage.service';
import { AddCustomer } from '../../../services/add-customer/add-customer';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent implements OnInit {

  #storageService = inject(StorageService);
  selectedCustomer = signal<AddCustomer[]>([]);
  filteredSales: any[] = [];
  salesTableData: boolean = false;
  #fb = inject(FormBuilder);

  salesForm = signal(this.#fb.group({
    customerName: [''],
    fromDate: [''],
    toDate: ['']
  }));

  ngOnInit(): void {
    this.selectCustomer();
  }

  selectCustomer() {
    const valCust = this.#storageService.getData('customerData');
    this.selectedCustomer.set(valCust);
  }

  salesFormSubmit() {
    const formValue = this.salesForm().value;
    console.log(formValue);
    
    const salesData = this.#storageService.getData('sales');
  //   if(salesData)
  //     // this.filteredSales = salesData.filter((sale:any) => {
  //     //   const saleDate = new Date(sale.date);
  //     //   // const fromDate = new Date(formValue.fromDate);
  //     //   // const toDate = new Date(formValue.toDate);
        
  //     //   return (
  //     //     (formValue.customerName ? sale.customerName === formValue.customerName : true) &&
  //     //     // (formValue.fromDate ? saleDate >= fromDate : true) &&
  //     //     // (formValue.toDate ? saleDate <= toDate : true)
  //     //   );
  //   });
  //   // console.log(typeof (valCust));

  //   console.log(this.salesForm().value);

  }
}
