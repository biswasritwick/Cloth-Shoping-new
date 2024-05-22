import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Dealersdata } from 'src/app/datatyps';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-seller-header',
  templateUrl: './seller-header.component.html',
  styleUrls: ['./seller-header.component.css']
})
export class SellerHeaderComponent {
  @Output() navStatus = new EventEmitter<boolean>()
  public dealesdetails: any | undefined;
  public dealersName: any | undefined;
  public dealersType: any | undefined;

  constructor(private dealerService: DealerServiceService, private router: Router) { }

  ngOnInit() {
    this.dealerService.logData()
    this.dealerService.sellerLogData.subscribe({
      next: (res: Dealersdata) => {
        this.dealesdetails = res
        this.dealesdetails.forEach((element: any) => {
          console.warn(element.firstname  +  element.lastname);
          this.dealersName = element.firstname + element.lastname
          if(element.seller===true){
            this.dealersType="seller"
          }
        })


      }
    })
  }

  navBar: boolean = false
  public responceNavbar() {
    this.navBar = !this.navBar
    this.navStatus.emit(this.navBar)
  }
}
