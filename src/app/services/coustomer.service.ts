import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { cartData, coustomerData, getcartData, sellerProduct } from '../datatyps';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoustomerService {
  coustomerLogData = new EventEmitter<coustomerData[] | []>()
  cartData = new EventEmitter<sellerProduct[] | []>()


  constructor(private Httpclient: HttpClient) { }

  coustomerApi = "http://localhost:3000/coustomer_Data"
  coustomerCartApi = "http://localhost:3000/cart_product"



  public coustomerAdd(data: coustomerData): Observable<object> {
    let myapi = `${this.coustomerApi}`
    return this.Httpclient.post(myapi, data)
  }
  public getcoustomerslist() {  //all dealers details
    let myapi = `${this.coustomerApi}`
    return this.Httpclient.get<coustomerData[]>(myapi)
  }
  public getcoustomerDetails(id: any) {
    let myapi = `${this.coustomerApi}/${id}`
    return this.Httpclient.get<coustomerData[]>(myapi)
  }
  public logdata() {      //after login coustomer log information
    let user = localStorage.getItem('coustomer')
    if (user) {
      this.getcoustomerslist().subscribe({
        next: (value: coustomerData[]) => {
          for (let i of value) {
            if (i.id === user) {
              this.coustomerLogData.emit([i])

            }
          }
        },
        error: () => {

        }, complete: () => {

        }
      })
    }
  }
  public addToCartService(data: sellerProduct) {
    let cartData = []
    let localStorageCart = localStorage.getItem('localCart')
    if (!localStorageCart) {
      localStorage.setItem('localCart', JSON.stringify([data]))
    }
    else {
      cartData = JSON.parse(localStorageCart)
      cartData.push(data)
      localStorage.setItem('localCart', JSON.stringify(cartData))

    }
    this.cartData.emit(cartData)
  }
  public localremoveToCart(productId: string) {
    let localStorageCart = localStorage.getItem('localCart')
    if (localStorageCart) {
      let items: sellerProduct[] = JSON.parse(localStorageCart)
      items = items.filter((item: sellerProduct) => productId !== item.id)

      this.cartData.emit(items)
      console.warn(items);


    }
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
  public removeToCartService(id: string) {
    let myapi = `${this.coustomerCartApi}/`
    return this.Httpclient.delete<cartData>(myapi+id)
  }
  public addToCart(coustomerid:string){
    let myapi = `${this.coustomerCartApi}?coustomerId=`
    return this.Httpclient.get<cartData[]>(myapi+coustomerid)
  }
}
