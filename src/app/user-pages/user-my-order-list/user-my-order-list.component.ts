import { Component } from '@angular/core';
import { coustomerorderProduct } from 'src/app/datatyps';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-my-order-list',
  templateUrl: './user-my-order-list.component.html',
  styleUrls: ['./user-my-order-list.component.css']
})
export class UserMyOrderListComponent {
  public orderDetails: coustomerorderProduct[] = []

  constructor(private productService: ProductService) { }


  ngOnInit() {
    this.getOrderData()
    // let date = new Date()  //date stamp
    // var da = date.toLocaleString()    //date stamp
    // console.warn(da);

  }



  public getOrderData() {
    let userId: any = localStorage.getItem('coustomer')
    console.warn(userId);
    this.productService.getcoustomerOrderProductdata(userId).subscribe({
      next: (value) => {
        this.orderDetails = value
        console.warn(this.orderDetails);


      },
      error: (value) => {

      },
      complete: () => {
        this.orderStatus()
      }
    })

  }
  public orderStatus() {
    this.orderDetails.forEach((element: any) => {
      console.warn(element.productId);

    })
  }
}
// next: (value) => {

// },
// error: (value) => {

// },
// complete: () => {

// }