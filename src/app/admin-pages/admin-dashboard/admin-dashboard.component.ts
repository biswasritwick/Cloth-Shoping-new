import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  public adminLength: number = 0;
  public dealesLength: number = 0;
  public dealesProductLength: number = 0;


  constructor(private adminService: AdminServiceService, private dealerService: DealerServiceService) { }
 
  ngOnInit() {
    this.dashboardAllitemsLength()
  }

  public dashboardAllitemsLength(){
    this.adminService.getAdminList().subscribe({
      next: (result:any) => {
        console.warn(result.length);

        this.adminLength = result.length
      }
    })
    this.dealerService.getdealerslist().subscribe({
      next: (result:any) => {
        console.warn(result.length);

        this.dealesLength = result.length
      }
    })
    this.dealerService.getdealersProductlist().subscribe({
      next: (result:any) => {
        console.warn(result.length);

        this.dealesProductLength = result.length
      }
    })
  }
}
