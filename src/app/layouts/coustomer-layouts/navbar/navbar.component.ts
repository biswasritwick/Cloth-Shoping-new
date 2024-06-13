import { Component, EventEmitter, Output } from '@angular/core';
import { coustomerData } from 'src/app/datatyps';
import { CoustomerService } from 'src/app/services/coustomer.service';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() sidenavbar = new EventEmitter<boolean>()     

  public login = false
  public cartTotalItems: number = 0
  public coustomerDetails: any = [];
  public coustomerId: string = '';
  menustatus: boolean = false;    // menustatus for side nav

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
  sidenav() {   // sidenav open click function
    this.menustatus = !this.menustatus
    this.sidenavbar.emit(this.menustatus)
    // console.warn('click sidenav btn');

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
