import { Component } from '@angular/core';
import { DealerServiceService } from 'src/app/services/dealer-service.service';
import { ActivatedRoute } from '@angular/router';
import { cartData, coustomerData, sellerProduct } from 'src/app/datatyps';
import { CoustomerService } from 'src/app/services/coustomer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-product-details',
  templateUrl: './user-product-details.component.html',
  styleUrls: ['./user-product-details.component.css']
})
export class UserProductDetailsComponent {
  public productDetails: any | undefined;
  public productQuantity: number = 1;
  public coustomerId: any = '';
  public coustomerDetails: any = [];
  public ReomveCart: boolean = false;
  public logcartdata: any | undefined;


  constructor(private ActivatedRoute: ActivatedRoute, private coustomerService: CoustomerService,private productService:ProductService) { }

  ngOnInit() {
    this.showProductDetails()

  }

  public showProductDetails() {
    let productId = this.ActivatedRoute.snapshot.paramMap.get('productid')
    this.coustomerService.logdata()
    this.coustomerService.coustomerLogData.subscribe({
      next: (value: coustomerData) => {
        this.coustomerDetails = value
        this.coustomerDetails.forEach((element: coustomerData) => {
          this.coustomerId = element.id
          console.warn(element.id);
        })
      }
    })
    console.log(productId);
    productId && this.productService.getProductDetails(productId).subscribe({
      next: (result) => {
        this.productDetails = result
      },
      error: (result) => {
        console.warn(result);
      },
      complete: () => {
        console.warn('active');

        let user = localStorage.getItem('coustomer')
        let cartData = localStorage.getItem('localCart')
        if (productId && cartData) {
          let items = JSON.parse(cartData)
          items = items.filter((item: sellerProduct) => productId == item.id.toString())
          if (items.length) {
            this.ReomveCart = true
          } else {
            this.ReomveCart = false

          }
        }
        if (user) {
          console.warn('active2');
          this.coustomerService.getCartList(this.coustomerId)     //user cart list.length

          this.coustomerService.cartData.subscribe({
            next: (result: any) => {
              console.warn(result);

              let item = result.filter((item: any) => productId?.toString() == item.productId?.toString())
              if (item.length) {
                console.log('done');

                this.logcartdata = item[0];
                this.ReomveCart = true;
              }
            }
          })



        }


      }
    })


  }

  public handelQuantity(val: string) {
    if (this.productQuantity < 10 && val === 'plus') {
      this.productQuantity += 1
    } else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity -= 1
    }
  }


  public addToCart() {
    let coustomerLogin = localStorage.getItem('coustomer')
    if (this.productDetails!) {
      this.productDetails.quantity = this.productQuantity
    }
    if (!coustomerLogin) {   //when user not login
      console.warn('user not login');
      this.coustomerService.addToCartService(this.productDetails)
      this.ReomveCart = true

    } else if (coustomerLogin!) {     //when user login
      console.warn('user login');
      let userLogin = localStorage.getItem('coustomer')
      if (userLogin) {

        let cartdata: cartData = {
          ...this.productDetails,
          productId: this.productDetails.id,
          coustomerId: this.coustomerId,
        }
        delete cartdata.id
        console.warn(cartdata, 'cartdata');
        this.coustomerService.coustomerAddToCart(cartdata).subscribe({
          next: (result) => {
            console.warn(result);

          }, error: () => {

          }, complete: () => {
            console.warn('product added');
            this.coustomerService.getCartList(this.coustomerId)  //user cart list
            this.ReomveCart = true

          }
        })


      }

    }
    console.warn(this.productDetails);

  }
  public removeTocart(dataId: any) {
    let coustomer = localStorage.getItem('coustomer')
    if (coustomer) {
      // this.ReomveCart = false
      console.warn(this.logcartdata.id);
      this.logcartdata&&this.coustomerService.removeToCartService(this.logcartdata.id).subscribe({
        next:()=>{

        },error:(err) =>{
          console.warn('error',err);
          
        },complete:()=> {
          this.coustomerService.getCartList(this.coustomerId )
          this.ReomveCart=false
        },
      })

      // this.coustomerService.localremoveToCart(dataId)
    }
     else {
      this.coustomerService.removeToCartService(dataId)
      

    }

  }
}
