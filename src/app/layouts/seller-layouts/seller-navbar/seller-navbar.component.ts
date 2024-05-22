import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dealersdata } from 'src/app/datatyps';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-seller-navbar',
  templateUrl: './seller-navbar.component.html',
  styleUrls: ['./seller-navbar.component.css']
})
export class SellerNavbarComponent {
  public menuType: string = 'default'
  public dealesdetails: any | undefined;

  constructor(private dealerService: DealerServiceService, private router: Router) { }

  ngOnInit() {
    this.dealerService.logData()
    this.dealerService.sellerLogData.subscribe({
      next: (res: Dealersdata) => {
        this.dealesdetails = res
        console.warn(this.dealesdetails);


      }
    })
  }
  logout() {
    localStorage.removeItem('seller')
    this.router.navigate(['/login-page-layout/loginpage'])
  }
  navitems = [
    {
      number: '1',
      name: 'dashboard',
      icon: 'fa-solid fa-gauge',
      routlink: 'seller-dashboard',
    },
    {
      number: '2',
      name: 'seller profile',
      icon: 'fa-regular fa-user',
      routlink: 'seller-profile',
    },
    {
      number: '3',
      name: 'seller add product',
      icon: 'fa-solid fa-house',
      routlink: 'seller-add-product',


    },
    {
      number: '4',
      name: 'seller product list',
      icon: 'fa-solid fa-house',
      routlink: 'seller-product-list',

    },
    {
      number: '5',
      name: 'seller order list',
      icon: 'fa-solid fa-list',
      routlink: 'seller-order-list',
    },
    {
      number: '8',
      name: 'settings',
      icon: 'fa-solid fa-gear',
      routlink: '',
    }
  ]
}
