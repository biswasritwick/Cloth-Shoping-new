import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Dealersdata, sellerProduct } from '../datatyps';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class DealerServiceService {
  sellerLogData = new EventEmitter<Dealersdata[] | []>()


  // allApi link

  dealersAddapi = "http://localhost:3000/delers_data"
  dealersProductapi = "http://localhost:3000/delers_product"


  constructor(private Httpclient: HttpClient) { }


  public dealersAdd(data: Dealersdata): Observable<object> {
    let myapi = `${this.dealersAddapi}`
    return this.Httpclient.post(myapi, data)
  }
  public getdealerslist() {  //all dealers details
    let myapi = `${this.dealersAddapi}`
    return this.Httpclient.get<Dealersdata[]>(myapi)
  }
  public getDetails(id: any) {
    let myapi = `${this.dealersAddapi}/${id}`
    return this.Httpclient.get<Dealersdata>(myapi)
  }
  public UpdateDetails(product: any) {
    let myapi = `${this.dealersAddapi}/${product.id}`
    return this.Httpclient.put<Dealersdata>(myapi, product)
  }


  // -----------------------product function------------

  public dealersAddproduct(data: sellerProduct): Observable<object> {
    let myapi = `${this.dealersProductapi}`
    return this.Httpclient.post(myapi, data)
  }
  public getdealersProductlist() {    //all seller all product service
    let myapi = `${this.dealersProductapi}`

    return this.Httpclient.get<sellerProduct[]>(myapi)
  }




  public logData() {      //Login persion all details
    let localData = localStorage.getItem('seller')
    this.getdealerslist().subscribe({
      next: (value: any) => {
        // console.warn(value);
        for (let i of value) {
          if (i.id === localData) {

            this.sellerLogData.emit([i])
            break
          }
        }
      },
      error: (err) => {
        console.error(err, 'localData not match');

      },
      complete: () => {

      },
    })
  }
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

 

}
