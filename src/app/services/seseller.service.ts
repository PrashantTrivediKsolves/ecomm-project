import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {signUpType,Login} from '../data-type'
import { BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class SesellerService {
  isSellerLoggedIn=new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter(false)
  constructor(private http:HttpClient,private router:Router ){ }

  // Integrating the signUp here
  userSignUp(data:signUpType)
  {
    // console.log("service called");
    return this.http.post("http://localhost:3000/seller",data,{observe:'response'}).subscribe((res)=>{
           console.log(res);
           if(res)
           {
            this.isSellerLoggedIn.next(true)
            // localStorage.setItem('seller',JSON.stringify(res.body));
            // this.router.navigate(["seller-home"])
           }
    })
  }
  reloadSeller()
  {
    if(localStorage.getItem('seller'))
    {
      this.isSellerLoggedIn.next(true)
      this.router.navigate(["seller-home"])
    }
  }
  // Integrating the Login Here.....

  userLogin(data:Login)
  {
    // console.log(data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((res:any)=>{
      // console.log(res);
      if(res&&res.body&&res.body.length>0)
      {
        console.log(res);
        this.isLoginError.emit(false);
        localStorage.setItem("seller",JSON.stringify(res.body));
        this.router.navigate(["seller-home"]);
      }
      else{
        console.log("Login failed");
        this.isLoginError.emit(true);
      }
    })
  }
}
