import { Component, OnInit } from '@angular/core';
import {SesellerService} from '../services/seseller.service'

import {signUpType} from '../data-type'
import {Router} from '@angular/router'

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})

export class SellerAuthComponent implements OnInit {
  showLogin=false;
  authError:string='';
  constructor(private seller:SesellerService,private router:Router) { }
  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(data:signUpType)
  {
    // console.log(data);
    // this.seller.userSignUp(data).subscribe((result)=>
    // {
    //   // console.log(result);
    //   if(result)
    //   {
    //     this.router.navigate(["seller-home"])
    //   }
    // });
    this.seller.userSignUp(data);
  }
  login(data:signUpType)
  {
    //console.log(data);
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>
    {
      // console.log(isError);
      if(isError)
      {
        this.authError="Email or password is not valid"
      }
    })
  }
  openLogin()
  {
    this.showLogin=true
  }
  openSignUp()
  {
    this.showLogin=false;
  }
}
