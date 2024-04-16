import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage:string|undefined;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  
  submit(data:product)
  {
    // console.log(data);
    this.productService.addProduct(data).subscribe((res)=>
    {
      console.log(res);
      if(res)
        {
          this.addProductMessage="Product is added successfully"
        }
    });

    setTimeout(()=>
    {
      this.addProductMessage=undefined;
    },3000)
  }
}
