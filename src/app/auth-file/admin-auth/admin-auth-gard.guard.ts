import { Injectable } from '@angular/core';
import {  CanActivate,Router } from '@angular/router';
import { AdminAuthServiceService } from './admin-auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private adminAuthService:AdminAuthServiceService,private router:Router){}

  public canActivate()
    {

    if(this.adminAuthService.isLoggedIn()){
      return true;
    }
    else
    {
      alert("Please login to access the Admin login");
      localStorage.removeItem('employe')
      localStorage.removeItem('userType')
      this.router.navigate(['login-page-layout']);
      return false;
    }
  }
  
}