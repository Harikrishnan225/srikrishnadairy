import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AddCustomer } from '../../../services/add-customer/add-customer';
import { StorageService } from '../../../services/storage/storage.service';
import { SalesData } from '../../../services/new-sales/new-sales';
import { Router } from '@angular/router';

enum TotalPrice {
  totalMilk,
  perLiterMilkPrice,
  totalCurd,
  perLiterCurdPrice
}
@Component({
  selector: 'app-new-sales',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './new-sales.component.html',
  styleUrl: './new-sales.component.scss'
})
export class NewSalesComponent implements OnInit {

  selectCustomer = signal<AddCustomer[]>([]);
  #storageService = inject(StorageService);
  #fb = inject(FormBuilder);
  totalMilk = signal<TotalPrice>(0);
  perLiterMilkPrice = signal<TotalPrice>(0);
  totalCurd = signal<TotalPrice>(0);
  perLiterCurdPrice = signal<TotalPrice>(0);
  totalMilkPrice = signal<any>(0)
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


    // this.newSalesForm().get('noOfLitersMilk')?.valueChanges.subscribe((totalMilk) => {
    //   console.log(totalMilk);

    //   this.newSalesForm().get('milkPricePerLiter')?.valueChanges.subscribe((perLiterMilkPrice) => {
    //     console.log(perLiterMilkPrice);
    //   })

    //   this.newSalesForm().get('noOfLitersCurd')?.valueChanges.subscribe((totalCurd) => {
    //     console.log(totalCurd);
    //   })
    //   this.newSalesForm().get('curdPricePerLiter')?.valueChanges.subscribe((perLiterCurdPrice) => {
    //     console.log(perLiterCurdPrice);
    //   })

    // })


  }
  milkProductPrice(totalMilk: number, perLiterMilkPrice: number) {
    return this.totalMilkPrice.update(() => totalMilk * perLiterMilkPrice)
  }

  customerDetails() {
    const valueCust = this.#storageService.getData('customerData');
    console.log(valueCust)
    this.selectCustomer.set(valueCust);
  }

  newSalesFormSubmit() {
    const salesValue = this.newSalesForm().value as SalesData
    this.#storageService.saveData('sales', salesValue);
    this.#router.navigate(['/sales']);
  }
}
