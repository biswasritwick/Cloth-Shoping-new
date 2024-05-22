import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthServiceService {

  constructor() { }
 public isLoggedIn()
  {
    return !!localStorage.getItem('employe')&&localStorage.getItem('userType');
  }
}
