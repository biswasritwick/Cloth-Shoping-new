import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { AdminAuthServiceService } from 'src/app/auth-file/admin-auth/admin-auth-service.service';
import { SellerAuthServiceService } from 'src/app/auth-file/seller-auth/seller-auth-service.service';
import { logdata, adminData, coustomerData, Dealersdata, cartData, localcartData, sellerProduct } from 'src/app/datatyps';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { CoustomerService } from 'src/app/services/coustomer.service';
import { DealerServiceService } from 'src/app/services/dealer-service.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.css']
})
export class LoginSignUpComponent {
  public showlogin = true
  public showsignup = false
  public sellerLogin = false
  public employeeLogin = false
  // data property

  public allAdminData: adminData[] = []
  public allSellerData: Dealersdata[] = []
  public allcoustomerData: coustomerData[] = []

  public subscriptions: Subscription[] = [];
  // flag property

  public flag: number = 0;
  // log persionName property

  public adminloginName: string = '';
  public coustomerloginName: string = '';
  public sellerloginName: string = '';
  // log persionId property

  public adminloginId: string = '';
  public sellerloginId: string = '';
  public coustomerloginId: string = '';



  constructor(private adminService: AdminServiceService, private router: Router, private adminAuthService: AdminAuthServiceService, private dealerService: DealerServiceService, private coustomerservice: CoustomerService, private sellerAuthService: SellerAuthServiceService,private productService:ProductService) { }

  ngOnInit() {
    this.coustomerAlldata()
    this.adminAlldata()
    this.sellerAlldata()
  }

  // -------------fatch data to service--------------

  public adminAlldata() {
    this.adminService.getAdminList().subscribe({
      next: (value) => {
        console.warn('admin', value);
        this.allAdminData = value
      },
      error: (err) => {
        console.warn(err, "Error");
      },
      complete: () => {

      }
    })
  }
  public sellerAlldata() {
    this.dealerService.getdealerslist().subscribe({
      next: (value) => {
        console.warn('seller', value);
        this.allSellerData = value
      },
      error: (err) => {
        console.warn(err, "Error");
      },
      complete: () => {
      },
    })
  }
  public coustomerAlldata() {
    this.coustomerservice.getcoustomerslist().subscribe({
      next: (result) => {
        this.allcoustomerData = result
        console.warn('coustomer', result);
      },
      error: (err) => {
        console.warn(err, "coustomer Error");
      },
      complete: () => {
      },
    })
  }

  // ---------------all function -----------------

  public showLogin() {
    this.showsignup = false
    this.showlogin = true
  }
  public showsignupfun() {
    this.showsignup = true
    this.showlogin = false
  }
  public sellerlogin() {
    if (this.sellerAuthService.isLoggedIn()) {    //when allready someone login 
      // this.toster.error('allready you LOGIN , pleace LOGOUT first')
      alert('allready you LOGIN , pleace LOGOUT first')
      this.router.navigate(['/seller/seller-dashboard'])
    } else {
      this.sellerLogin = true
      this.showlogin = false
    }
  }
  public employeelogin() {
    if (this.adminAuthService.isLoggedIn()) {    //when allready someone login 
      // this.toster.error('allready you LOGIN , pleace LOGOUT first')
      alert('allready you LOGIN , pleace LOGOUT first')
      this.router.navigate(['/admin/app-home'])
    } else {
      this.employeeLogin = true
      this.showlogin = false
    }
  }
  // ----------------coustomer zone------------------

  public coustomersignup(data: coustomerData) {    //coustomer signup  data send api
    this.coustomerservice.coustomerAdd(data).subscribe({
      next: (result) => {
        console.warn(result);
      }
    })
  }
  public coustomerLogin(sellerlogdata: logdata) {
    console.log(sellerlogdata);
    this.flag = 0
    this.coustomerloginName = ""
    for (let i of this.allcoustomerData) {
      if (i.email === sellerlogdata.email && i.password === sellerlogdata.password) {
        this.flag = 1
        this.coustomerloginName = i.name
        this.coustomerloginId = i.id
      }
    }
    if (this.flag == 1) {
      alert("HI! " + this.coustomerloginName + "Welcome to cloth's site")
      localStorage.setItem('coustomer', this.coustomerloginId)
      this.router.navigate(["/app-home"])
      this.localCartToRemoveCart()
    } else {
      alert('Incorrect userid or password')
    }
  }
  public localCartToRemoveCart() {
    console.warn('localFunction call');
    let localcartData = localStorage.getItem('localCart')
    if (localcartData) {
      let cartDataList: sellerProduct[] = JSON.parse(localcartData)
      cartDataList.forEach((Element: sellerProduct,index) => {
        let cart: cartData = {
          ...Element,
          productId: Element.id,
          coustomerId: this.coustomerloginId
        }
        delete cart.id
        setTimeout(() => {
          this.coustomerservice.coustomerAddToCart(cart).subscribe({
            next: (result) => {
              console.warn(result);

            }, error: () => {

            }, complete: () => {
              
              localStorage.removeItem('localCart')

            }
          })
        }, 100);

      })

    }
    this.coustomerservice.getCartList(this.coustomerloginId)

  }

  // ----------------employee zone------------------


  public employelogdata(employlogdata: logdata) {
    this.flag = 0
    this.adminloginName = ""
    for (let i of this.allAdminData) {
      if (i.email === employlogdata.email && i.password === employlogdata.password) {
        this.flag = 1
        this.adminloginName = i.firstname + i.lastname
        this.adminloginId = i.id
        if (this.flag == 1) {
          if (i.service === true && i.telecaller === false) {
            this.flag = 2
            localStorage.setItem('userType', "service")
            localStorage.setItem('employe', this.adminloginId)
          } else if (i.service === false && i.telecaller === true) {
            this.flag = 2
            localStorage.setItem('userType', "telecaller")
            localStorage.setItem('employe', this.adminloginId)
          } else {
            localStorage.setItem('usertype', "undefine")
            localStorage.removeItem('usertype')
            localStorage.removeItem('employe')
            this.flag = 3
          }
        }
      }
    }
    if (this.flag == 2) {
      alert("HI! " + this.adminloginName + "Welcome to cloth's site")
      this.router.navigate(["/admin/app-home"])
    } else if (this.flag == 3) {
      alert('your user type not defiend,pleace contact admin section')
    }
    else {
      alert('Incorrect userid or password')
    }

  }

  // ----------------seller zone------------------

  public sellerlogdata(sellerlogdata: logdata) {
    console.log(sellerlogdata);
    // this.toster.success('login success')
    this.flag = 0
    this.sellerloginName = ""
    for (let i of this.allSellerData) {
      if (i.email === sellerlogdata.email && i.password === sellerlogdata.password) {
        this.flag = 1
        this.sellerloginName = i.firstname + i.lastname
        this.sellerloginId = i.id
        break
      }
    }
    if (this.flag == 1) {
      alert("HI! " + this.sellerloginName + "Welcome to cloth's site")
      this.router.navigate(["/seller/seller-dashboard"])
      localStorage.setItem('seller', this.sellerloginId)
    } else {
      alert('Incorrect userid or password')
    }
  }
}






































