import { Component } from '@angular/core';
import { coustomerData } from 'src/app/datatyps';
import { CoustomerService } from 'src/app/services/coustomer.service';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public login = false
  public cartTotalItems: number = 0
  public coustomerDetails: any = [];
  public coustomerId: string = '';

  constructor(private dealerService: DealerServiceService, private coustomerService: CoustomerService) { }
  ngOnInit() {
    this.cartLength()

    this.coustomerService.logdata()
    this.coustomerService.coustomerLogData.subscribe({
      next: (value: coustomerData) => {
        this.coustomerDetails = value
        this.coustomerDetails.forEach((element: coustomerData) => {
          this.coustomerId = element.id
          console.warn(value);
        })
        this.coustomerService.getCartList(this.coustomerId)

      }
    })
  }


  public menufuncion() {
    this.login = !this.login
  }

  public cartLength() {
    let cartData = localStorage.getItem('localCart')
    if (cartData!) {
      this.cartTotalItems = JSON.parse(cartData).length
    }
    this.coustomerService.cartData.subscribe({
      next: (res: any) => {
        // console.warn(res);
        this.cartTotalItems = res.length

      }
    })
  }

}
