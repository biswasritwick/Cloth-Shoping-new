import { Component } from '@angular/core';
import { Dealersdata, cartData, coustomerorderProduct } from 'src/app/datatyps';
import { DealerServiceService } from 'src/app/services/dealer-service.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-order-list',
  templateUrl: './seller-order-list.component.html',
  styleUrls: ['./seller-order-list.component.css']
})
export class SellerOrderListComponent {

  public dealesdetails: any = [];
  public dealesName: any = [];
  public dealesOrdersProductLength: number = 0;
  public coustomerOrderedProduts: coustomerorderProduct[] = [];
  public sellerResponce: coustomerorderProduct[] = [];
  accepted = true
  reject = false


  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.dashboardAllitemsLength()
  }

  public dashboardAllitemsLength() {
    let sellerID = localStorage.getItem('seller')
    this.productService.getsellerorderList(sellerID).subscribe({     //coustomer orderProduct api list service called
      next: (result: any) => {
        console.log(result);

        let acceptedValue = result
        // let rejectvalus = result
        acceptedValue = acceptedValue.filter((value: any) =>
          value.orderStatus === "process")
        this.coustomerOrderedProduts = acceptedValue
        console.warn(acceptedValue);
      }, error: (err) => {
        console.warn(err, 'error');

      }, complete: () => {

      }
    })
  }
  public addcptProduct(value: any) {

    this.productService.getOrderProduct(value).subscribe({
      next: (res) => {
        console.warn(res);


        res.forEach((Element: any) => {

          this.sellerResponce = Element
        })
        console.warn(this.sellerResponce);

      }, error: (err) => {
        console.warn(err, 'error');

      }, complete: () => {
        let date = new Date()  //date stamp
        var dateTime = date.toLocaleString()    //date stamp
        let data = {
          ...this.sellerResponce,
          "orderStatus": 'accepte',
          "sellerOrder_stamp": dateTime,

        }
        console.warn(data);
        this.productService.updatesellerorderList(data).subscribe({
          next: (res) => {
            console.warn(res);
          }, error: (err) => {
            console.warn(err, 'error');

          }, complete: () => {
            this.dashboardAllitemsLength()

          }
        })
      }
    })

  }
  public rejectProduct(value: any) {

    this.productService.getOrderProduct(value).subscribe({
      next: (res) => {
        console.warn(res);


        res.forEach((Element: any) => {

          this.sellerResponce = Element
        })
        console.warn(this.sellerResponce);

      }, error: (err) => {
        console.warn(err, 'error');

      }, complete: () => {
        let date = new Date()  //date stamp
        var dateTime = date.toLocaleString()    //date stamp
        let data = {
          ...this.sellerResponce,
          "orderStatus": 'reject',   //order reject
          "sellerOrder_stamp": dateTime, //order reject time
        }
        console.warn(data);
        this.productService.updatesellerorderList(data).subscribe({
          next: (res) => {
            console.warn(res);
          }, error: (err) => {
            console.warn(err, 'error');

          }, complete: () => {
            this.dashboardAllitemsLength()

          }
        })
      }
    })

  }



}
