import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularProductsVal:undefined|product[];
  trendyProductsVal:undefined|product[];
  constructor(private product:ProductService) { }
  ngOnInit(): void {
    this.product.popularProduct().subscribe((res)=>
    {
      this.popularProductsVal=res;
    })
    this.product.trendyProducts().subscribe((res)=>
    {
      this.trendyProductsVal=res;
    })

  }
}
