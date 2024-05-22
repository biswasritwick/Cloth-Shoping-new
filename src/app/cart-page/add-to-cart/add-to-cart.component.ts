import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { cartData, coustomerAddress, coustomerData, coustomerorderProduct, pricesummery } from 'src/app/datatyps';
import { CoustomerService } from 'src/app/services/coustomer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  public coustomerDetails: any = [];
  public coustomerId: string = '';
  public coustomercartProduts: cartData[] = [];
  public totalprice: number = 0;
  public afterBuyNow: string = 'buyNow';

  public produt: any = []
  public cartData: cartData[] | undefined

  public pricesummery: pricesummery = {
    price: 0,
    subtotal: 0,
    Tax: 0,
    Shipping: 0,
    total: 0,
  }
  constructor(private productService: ProductService, private route: Router, private coustomerservice: CoustomerService) { }

  ngOnInit() {
    this.afterLoginData()

  }
  public afterLoginData() {   //after login get coustomer data 
    this.coustomerservice.logdata()
    this.coustomerservice.coustomerLogData.subscribe({
      next: (value: coustomerData) => {
        this.coustomerDetails = value
        this.coustomerDetails.forEach((element: coustomerData) => {
          this.coustomerId = element.id  //coustomer id
        })
        this.productService.addToCart(this.coustomerId).subscribe({   //coustomer ordered product fatched 
          next: (result) => {
            console.warn(result);
            this.cartData = result
            this.coustomercartProduts = result
            let price = 0;
            result.forEach((item) => {
              // console.warn(item);
              if (item.quantity) {

                price = price + (+item.product_price * +item.quantity)
              }
              // console.warn('price=' + price);
              this.totalprice = price
            })
            this.pricesummery.price = price
            this.pricesummery.Tax = price * 5 / 100
            this.pricesummery.Shipping = 100
            this.pricesummery.total = price + (price * 5 / 100) + 100
            console.warn(this.pricesummery);    //cart product total price
          },
        })
      }
    })
  }

  public removeTocart(dataId: any) {     //remove product form cart 
    let coustomer = localStorage.getItem('coustomer')
    if (coustomer) {
      // console.warn(this.logcartdata.id);
      dataId && this.productService.removeToCartService(dataId).subscribe({
        next: () => {

        }, error: (err) => {
          console.warn('error', err);

        }, complete: () => {
          this.productService.getCartList(this.coustomerId)
          this.afterLoginData()

        },
      })
    }
    else {
      this.productService.removeToCartService(dataId)
    }
  }
  public buyNowProduct() {     //product buy 
    let user = localStorage.getItem('coustomer')
    let address = localStorage.getItem('orderAddress')

    if (this.coustomercartProduts) {
      if (!user) {
        alert('Pleace login first')
        this.route.navigate(["/login-page-layout/loginpage"])

      } else if (user && address) {
        this.afterBuyNow = 'checkout'

      }
      else {
        this.afterBuyNow = 'address'

      }
    }
  }
  public addressdata(data: coustomerAddress) {   //get coustomer product delivery address 
    let user = localStorage.getItem('coustomer')
    let address = localStorage.getItem('orderAddress')
    if (user && address) {
      console.warn(true);
      this.afterBuyNow = 'checkout'

    } else {
      console.warn(false);
      localStorage.setItem('orderAddress', JSON.stringify([data]))
      this.afterBuyNow = 'checkout'

    }


  }
  public removeAdderss() {  //reomve address
    let user = localStorage.getItem('coustomer')
    let address = localStorage.getItem('orderAddress')
    if (user && address) {
      localStorage.removeItem('orderAddress')
      this.afterBuyNow = 'address'

    } else {
      console.warn('address not avaible');

    }
  }
  public orderPlased() {

    let user = localStorage.getItem('coustomer')
    let address = localStorage.getItem('orderAddress')
    let date = new Date()  //date stamp
    var dateTime = date.toLocaleString()    //date stamp

    // console.warn(address);
    if (this.coustomercartProduts) {
      if (user && address) {
        let addres = JSON.parse(address)
        this.coustomercartProduts.forEach((Element: any) => {
          this.produt = Element
          console.warn(this.produt);
          let orders: coustomerorderProduct = {

            "coustomerId": this.produt.coustomerId,
            "productId": this.produt.productId,
            "dealerID": this.produt.dealerID,
            "quantity": this.produt.quantity,
            "product_name": this.produt.product_name,
            "product_price": this.produt.product_price,
            "product_image_link": this.produt.product_image_link,
            "productOrder_stamp": dateTime,
            "sellerOrder_stamp": false,
            "deliveryOrder_stamp": false,
            "dealerAcceptedOrder": false,
            "deliveryOrder": false,
            "address": addres
          }
          console.warn(orders);
          this.productService.orderproduct(orders).subscribe({
            next: (value) => {
              console.warn(value);

            },
            error: (value) => {
              console.warn(value, 'error');

            },
            complete: () => {
              this.afterBuyNow = 'notification'

              this.cartData?.forEach((items) => {
                // console.warn(items);

                setTimeout(() => {
                  items.id && this.productService.deleteCartItemAfterOrdered(items.id)
                }, 2000);

              })
              localStorage.removeItem('orderAddress')
              setTimeout(() => {

                this.afterLoginData()
                this.afterBuyNow = 'buyNow'

              }, 3000);
            },
          })
        })
        // console.warn(orders);
      }
    }
  }
}
