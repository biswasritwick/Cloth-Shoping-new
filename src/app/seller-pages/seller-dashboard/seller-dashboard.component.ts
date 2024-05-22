import { Component } from '@angular/core';
import { Dealersdata } from 'src/app/datatyps';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { DealerServiceService } from 'src/app/services/dealer-service.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent {
  public dealesdetails: any = [];
  public dealesName: any = [];
  public dealesProductLength: number = 0;
  public dealesOrdersProductLength: number = 0;
  constructor( private dealerService: DealerServiceService, private productService: ProductService) { }

  ngOnInit() {
    this.dashboardAllitemsLength()
  }

  public dashboardAllitemsLength() {
    let sellerID = localStorage.getItem('seller')

    this.dealerService.logData()
    this.dealerService.sellerLogData.subscribe({
      next: (result: Dealersdata) => {
        console.log(result);
        this.dealesdetails = result
        this.dealesdetails.forEach((element: any) => {
          console.log(element.firstname + element.lastname);
          this.dealesName = element.firstname + element.lastname
        })
      }
    })

    this.productService.getsellerProducttList(sellerID).subscribe({
      next: (result: any) => {
        console.warn(result.length);

        this.dealesProductLength = result.length
      }
    })
    this.productService.getsellerorderList(sellerID).subscribe({
      next: (result: any) => {
        console.warn(result.length);

        this.dealesOrdersProductLength = result.length
      }
    })
  }
}
