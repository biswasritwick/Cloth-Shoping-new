import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { cartData, coustomerorderProduct, getcartData, sellerProduct } from '../datatyps';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartData = new EventEmitter<sellerProduct[] | []>()




  dealersProductapi = "http://localhost:3000/delers_product"
  coustomerCartApi = "http://localhost:3000/cart_product"
  coustomerOrderApi = "http://localhost:3000/orders_product"

  constructor(private Httpclient: HttpClient) { }



  //--------------------all type of product function   SELLER------------------

  public dealersAddproduct(data: sellerProduct): Observable<object> {
    let myapi = `${this.dealersProductapi}`
    return this.Httpclient.post(myapi, data)
  }
  public getdealersProductlist() {    //all seller all product service
    let myapi = `${this.dealersProductapi}`

    return this.Httpclient.get<sellerProduct[]>(myapi)
  }
  public getProductDetails(id: any) {  //when click product,then details show
    let myapi = `${this.dealersProductapi}/${id}`
    return this.Httpclient.get<sellerProduct[]>(myapi)
  }

  //--------------------get all product, function  SELLER------------------


  public getsellerProducttList(dealerID: any) {  //which seller login,then this seller all product list show
    let myapi = `${this.dealersProductapi}?dealerID=`
    return this.Httpclient.get<sellerProduct[]>(myapi + dealerID)

  }
  public FrontProduct() { //home page product
    let myapi = `${this.dealersProductapi}?_limit=10`
    return this.Httpclient.get<sellerProduct[]>(myapi)
  }

  public searchProduct(dealerID: any) {
    let myapi = `${this.dealersProductapi}?id=`
    return this.Httpclient.get<sellerProduct[]>(myapi + dealerID)
  }

  public getsellerorderList(dealerID: any) {  //which seller login,then this seller all product list show
    let myapi = `${this.coustomerOrderApi}?dealerID=`
    return this.Httpclient.get<sellerProduct[]>(myapi + dealerID)

  }
  public sellerOrderedListResponce(id: any) {  //which seller login,then this seller all product list show
    let myapi = `${this.coustomerOrderApi}?id=`
    return this.Httpclient.get<sellerProduct[]>(myapi + id)

  }
  public getOrderProduct(ID: any) {  //which seller login,then this seller all product list show
    let myapi = `${this.coustomerOrderApi}?id=`
    return this.Httpclient.get<coustomerorderProduct[]>(myapi+ID)

  }

  public updatesellerorderList(product: any) {    //update product when seller login,and seller update
    let myapi = `${this.coustomerOrderApi}/${product.id}`
    return this.Httpclient.put(myapi, product)

  }
  //--------------------all type of product function  COUSTOMER  ------------------

  public getProductlistforCoustomer() {    //all seller all product service
    let myapi = `${this.dealersProductapi}?_limit=15`

    return this.Httpclient.get<sellerProduct[]>(myapi)
  }
  public coustomerAddToCart(data: cartData) {
    let myapi = `${this.coustomerCartApi}`
    return this.Httpclient.post<cartData>(myapi, data)
  }


  public getCartList(coustomerId: string) {
    let myapi = `${this.coustomerCartApi}?coustomerId=`
    return this.Httpclient.get<getcartData[]>(myapi + coustomerId, { observe: 'response' }).subscribe({
      next: (result) => {
        // console.warn(result);
        
        if (result && result.body) {
          this.cartData.emit(result.body)
          }
      }
    })
  }
  public removeToCartService(id: string) {    //remove product separet
    let myapi = `${this.coustomerCartApi}/`
    return this.Httpclient.delete<cartData>(myapi+id)
  }
  public addToCart(coustomerid:string){
    let myapi = `${this.coustomerCartApi}?coustomerId=`
    return this.Httpclient.get<cartData[]>(myapi+coustomerid)
  }
  public orderproduct(data:any){
    let myapi = `${this.coustomerOrderApi}`
    return this.Httpclient.post(myapi,data)
  }

  public deleteCartItemAfterOrdered(id :string){
    let myapi = `${this.coustomerCartApi}/`
    return this.Httpclient.delete<cartData>(myapi+id,{observe:'response'}).subscribe({
      next:(res)=>{
        this.cartData.emit([])
      }
    })
  }
  public getcoustomerOrderProductdata(coustomerid:string){
    let myapi = `${this.coustomerOrderApi}?coustomerId=`
    return this.Httpclient.get<coustomerorderProduct[]>(myapi+coustomerid)
  }
  public getcoustomerOrderProduct(id: any) {  //when coustomer click your order thorw view order
    let myapi = `${this.coustomerOrderApi}/${id}`
    return this.Httpclient.get<coustomerorderProduct>(myapi)

  }

}
