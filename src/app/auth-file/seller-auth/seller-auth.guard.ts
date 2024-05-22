import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { SellerAuthServiceService } from './seller-auth-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class sellerAuthGuard implements CanActivate {

  constructor(private sellerAuthService:SellerAuthServiceService,private router:Router){}

  public canActivate()
    {

    if(this.sellerAuthService.isLoggedIn()){
      return true;
    }
    else
    {
      alert("Please login to access the seller login");
      this.router.navigate(['/login-page-layout/loginpage']);
      return false;
    }
  }
  
}
