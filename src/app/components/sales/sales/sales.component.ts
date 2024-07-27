import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddCustomer } from '../../../services/add-customer/add-customer';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SalesService } from '../../../services/sales/sales.service';
import { SalesData } from '../../../services/new-sales/new-sales';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent implements OnInit {

  #salesService = inject(SalesService);
  selectedCustomer = signal<AddCustomer[]>([]);
  salesData = signal<SalesData[]>([])
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
    const salesValue = this.#salesService.getData('customerData');
    this.selectedCustomer.set(salesValue);
  }

  salesSearchForm() {
    const salesData = this.#salesService.getData('sales');
    const form = this.salesForm();
    const custName = form?.get('customerName')?.value;
    const fromDate = form?.get('fromDate')?.value;
    const toDate = form?.get('toDate')?.value;

    const fromDateObj = fromDate ? new Date(fromDate) : null;
    const toDateObj = toDate ? new Date(toDate) : null;

    const filteredSales = salesData.filter((item: SalesData) => {
      if (item.selectedCustomer) {
        const salesDate = new Date(item.salesDate);
        return (
          (item.selectedCustomer == custName) &&
          (fromDateObj === null || salesDate >= fromDateObj) &&
          (toDateObj === null || salesDate <= toDateObj)
        );
      }
      return false;
    });
    this.salesData.set(filteredSales);
  }

}
