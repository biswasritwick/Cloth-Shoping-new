import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { coustomerorderProduct } from 'src/app/datatyps';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-my-order-details',
  templateUrl: './user-my-order-details.component.html',
  styleUrls: ['./user-my-order-details.component.css']
})
export class UserMyOrderDetailsComponent {
  public orderDetails: any | undefined
  public statusInformation: any = "In process"
  public statusTimeInformation: any = "N/A"
  public deliverystatusInformation: any = "waiting for seller responce"
  public deliverystatusTimeInformation: any = "N/A"

  public orderDetailsAddress: any | undefined[] = ""

  constructor(private ActivatedRoute: ActivatedRoute, private productService: ProductService) { }
  ngOnInit() {

    this.orderStatus()

  }

  public orderStatus() {
    let orderid = this.ActivatedRoute.snapshot.paramMap.get('orderid')
    console.warn(orderid);
    this.productService.getcoustomerOrderProduct(orderid).subscribe({
      next: (value) => {
        // console.warn(value);
        this.orderDetails = value
        for (let i of value.address) {
          console.warn(i);
          this.orderDetailsAddress = i
        }
      }, error: (err) => {
        console.warn(err, 'error');
      }, complete: () => {

        if (this.orderDetails.dealerAcceptedOrder === true) {
          this.statusInformation = "Seller accepte your order"
          this.deliverystatusInformation = "In process"

          this.statusTimeInformation = this.orderDetails.sellerOrder_stamp
          if (this.orderDetails.deliveryOrder_stamp === false) {
            this.deliverystatusTimeInformation = "N/A"
          } else {
            this.deliverystatusTimeInformation = this.orderDetails.deliveryOrder_stamp
          }



        } else if (this.orderDetails.dealerAcceptedOrder === "rejected") {
          this.statusInformation = "Seller rejecte your order"
          this.statusTimeInformation = this.orderDetails.sellerOrder_stamp
          this.deliverystatusInformation = "N/A"

        }

      },
    })
  }
}

