import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType:string="default";
  sellerName:string="prashant Trivedi";
  searchResult:undefined|product[];
  constructor(private route:Router,private product:ProductService) { }
  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>
    {
      if(val.url)
      {
        console.log(val.url);
        if(localStorage.getItem('seller')&&val.url.includes('seller'))
        {
          console.log("this is seller area");
          let sellerStore=localStorage.getItem('seller');
          let sellerData=sellerStore&&JSON.parse(sellerStore)[0];
          this.sellerName=sellerData.name;
          this.menuType="seller";
        }
        else
        {
          console.log("out side the seller area");
          this.menuType="default";
        }
      }
    })
  }
  logout()
  {
    localStorage.removeItem('seller');
    this.route.navigate(["/"])
  }
  searchProduct(query:KeyboardEvent){
    if(query)
      {
        const element=query.target as HTMLInputElement;
        this.product.serachProduct(element.value).subscribe((result)=>
        {
          console.log(result);
          this.searchResult=result;
        })
        // console.log(element.value);
      }

  }
}
