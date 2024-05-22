
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TelecallerAuthService } from './telecaller-auth.service';


@Injectable({
  providedIn: 'root'
})
export class telecallerGuard implements CanActivate {

  constructor(private tellAuthService: TelecallerAuthService, private router: Router) { }

  public canActivate() {
    let userdType = localStorage.getItem('userType')
    if (userdType == 'service') {
      return true;

    } else if (userdType == 'telecaller') {
      alert('User not permit')
      return false;

    }
    alert('User type no defiend pleace contact admin ')
    return false;

  }

}