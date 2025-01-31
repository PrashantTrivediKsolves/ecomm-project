import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList:undefined|product[];
  productMessage:undefined|string;
  constructor(private product:ProductService) { }
  ngOnInit(): void {
    this.list();
  }
  deleteProduct(id:number)
  {
    // console.log(id);
    this.product.deleteProduct(id).subscribe((res)=>
    {
      if(res)
        {
          this.productMessage="Product is Deleted"
          this.list();
        }
    })
    setTimeout(() => {
      this.productMessage=undefined;
    }, 3000);
  }
  list()
  {
    this.product.productList().subscribe((res)=>
      {
        // console.log(res);
        if(res)
          {
            this.productList=res;
          }
      })
  }
}
