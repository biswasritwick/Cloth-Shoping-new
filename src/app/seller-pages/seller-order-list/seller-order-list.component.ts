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


  constructor(private dealerService: DealerServiceService, private productService: ProductService) { }
  ngOnInit() {
    this.dashboardAllitemsLength()
  }

  public dashboardAllitemsLength() {
    let sellerID = localStorage.getItem('seller')


    this.productService.getsellerorderList(sellerID).subscribe({
      next: (result: any) => {
        let acceptedValue = result
        let rejectvalus = result
        acceptedValue = acceptedValue.filter((value: any) => value.dealerAcceptedOrder === false)
        this.coustomerOrderedProduts = acceptedValue
        console.warn(acceptedValue);

        // rejectvalus=rejectvalus.filter((value:any)=>value.dealerAcceptedOrder===true  )
        // this.coustomerOrderedProduts1 = rejectvalus 


      }, error: (err) => {
        console.warn(err, 'error');

      }, complete: () => {





      }
    })
  }
  addcptProduct(value: any) {

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
          "dealerAcceptedOrder": true,
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
  rejectProduct(value: any) {

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
          "dealerAcceptedOrder": 'rejected',
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



}
