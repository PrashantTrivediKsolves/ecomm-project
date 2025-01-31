import { Injectable } from '@angular/core';
import { product } from '../data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }

  addProduct(data:product)
  {
    // console.log("service is called");
    return this.http.post('http://localhost:3000/products',data);
  }
  productList()
  {
    return this.http.get<product[]>('http://localhost:3000/products');
  }

  deleteProduct(id:number)
  {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  getProduct(id:string)
  {
    return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }

  updateProduct(product:product)
  {
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`,product);
  }
  popularProduct()
  {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=1');
  }

  trendyProducts()
  {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=5');
  }

  serachProduct(query:string)
  {
    return this.http.get<product[]>(`http://localhost:3000/products?color=${query}`);
  }













}
