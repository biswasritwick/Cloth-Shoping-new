import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerAuthServiceService {

  constructor() { }

  public isLoggedIn()
  {
    return !!localStorage.getItem('seller');
  }
}
