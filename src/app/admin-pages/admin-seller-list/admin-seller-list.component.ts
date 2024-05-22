import { Component } from '@angular/core';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-admin-seller-list',
  templateUrl: './admin-seller-list.component.html',
  styleUrls: ['./admin-seller-list.component.css']
})
export class AdminSellerListComponent {
  constructor(private dealerservice: DealerServiceService) { }

  dealers: any | undefined[] = []

  public currentpage: number = 1;
  public count: number = 0;
  public tablesize: number = 8;
  public tablesizes: any = [5, 10, 15, 20, 25]

  ngOnInit() {
    this.adminList()
  }

  public adminList() {
    this.dealerservice.getdealerslist().subscribe({
      next: (res) => {
        console.warn(res);
        this.dealers = res
      },
      error: (error) => {
        console.warn("errors", error);

      },
      complete: () => {

      },

    })
  }
  public getproduct(id: string) {
    this.dealerservice.getDetails(id).subscribe({
      next: (res) => {
        console.warn(res);
      },
      error: (error) => {
        console.warn("errors", error);

      },
      complete: () => {

      },
    })
  }
}
