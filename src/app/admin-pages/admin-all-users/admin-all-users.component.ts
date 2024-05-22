import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { adminData } from 'src/app/datatyps';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-all-users',
  templateUrl: './admin-all-users.component.html',
  styleUrls: ['./admin-all-users.component.css']
})
export class AdminAllUsersComponent {
  constructor(private adminservice: AdminServiceService) { }
  public admins: any | undefined[] = []
  private subscriptions: Subscription[] = [];
  public pass = true


  public title = 'pagination'
  
  public currentpage: number = 1;
  public count: number = 0;
  public tablesize: number = 8;
  public tablesizes: any = [5, 10, 15, 20, 25]

  // ---ngonInit---
  ngOnInit() {
    this.adminList()
  }
  // ---functions---
  public adminList() {
    this.subscriptions.push(this.adminservice.getAdminList().subscribe({
      next: (res) => {
        console.warn(res);
        this.admins = res
     
      },
      error: (error) => {
        console.warn('error', error);

      },
      complete: () => {

      },

    }))
  }
  // -----pagination----

  public onTableDataChange(event: any) {
    this.currentpage = event
    this.adminList()

  }
  public onTableSizeChange(event: any) {
    this.tablesize=event.target.value
    this.currentpage = 1;
    this.adminList()


  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }


}
