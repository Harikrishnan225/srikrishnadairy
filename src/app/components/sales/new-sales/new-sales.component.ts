import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AddCustomer } from '../../../services/add-customer/add-customer';
import { SalesData } from '../../../services/new-sales/new-sales';
import { Router } from '@angular/router';
import { NewSalesService } from '../../../services/new-sales/new-sales.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-sales',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './new-sales.component.html',
  styleUrl: './new-sales.component.scss'
})
export class NewSalesComponent implements OnInit {

  selectCustomer = signal<AddCustomer[]>([]);
  #newSalesService = inject(NewSalesService);
  #fb = inject(FormBuilder);
  #router = inject(Router);

  newSalesForm = signal(this.#fb.group({
    selectedCustomer: [''],
    salesDate: [''],
    invoiceNumber: [''],
    noOfLitersMilk: [''],
    milkPricePerLiter: [''],
    noOfLitersCurd: [''],
    curdPricePerLiter: ['']
  }));

  ngOnInit(): void {
    this.customerDetails();
  }

  get milkPrice() {
    const form = this.newSalesForm();
    return Number(form?.get("noOfLitersMilk")?.value) * Number(form?.get("milkPricePerLiter")?.value)
  }

  get curdPrice() {
    const form = this.newSalesForm();
    return Number(form?.get("noOfLitersCurd")?.value) * Number(form?.get("curdPricePerLiter")?.value)
  }

  customerDetails() {
    const valueCust = this.#newSalesService.getData('customerData');
    console.log(valueCust)
    this.selectCustomer.set(valueCust);
  }

  newSalesFormSubmit() {
    const salesValue = this.newSalesForm().value as unknown as SalesData
    this.#newSalesService.saveData('sales', salesValue);
    this.#router.navigate(['/sales']);
  }
}
