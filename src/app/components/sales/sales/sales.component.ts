import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StorageService } from '../../../services/storage/storage.service';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent implements OnInit {

  #storageService = Inject(StorageService);

  ngOnInit(): void {

  }

  
}
