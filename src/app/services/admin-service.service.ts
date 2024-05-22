import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { adminData } from '../datatyps';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  employeLogData = new EventEmitter<adminData[] | []>()


  // all API link
  adminAddApi = "http://localhost:3000/admin_data"

  // constructor
  constructor(private httpclient: HttpClient) { }


  public adminAdded(data: adminData): Observable<object> {
    let myapi = `${this.adminAddApi}`
    return this.httpclient.post(myapi, data)
  }
  public getAdminList() {  //get ADMIN API all data list
    let myapi = `${this.adminAddApi}`
    return this.httpclient.get<adminData[]>(myapi)
  }
  public getDetails(id:any)  {  //when click product,then details show
    let myapi = `${this.adminAddApi}/${id}`
    return this.httpclient.get<adminData>(myapi)
  }
  public UpdateDetails(product:adminData)  {  
    let myapi = `${this.adminAddApi}/${product.id}`
    return this.httpclient.put(myapi,product)
  }


  public logData() {   //Login persion all details
    let localData = localStorage.getItem('employe')
    this.getAdminList().subscribe({
      next: (value: adminData[]) => {
        // console.warn(value);
        for (let i of value) {
          if (i.id === localData) {

            this.employeLogData.emit([i])
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
  
}
