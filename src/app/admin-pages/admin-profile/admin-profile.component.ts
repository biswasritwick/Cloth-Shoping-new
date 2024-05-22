import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { adminData } from 'src/app/datatyps';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  public adminDetails: adminData|undefined
  constructor(private router: Router, private ActivatedRoute: ActivatedRoute, private adminService: AdminServiceService) { }

  ngOnInit() {
    this.showProfileDetails()

  }


  // all Function
  public showProfileDetails() {
    let profileId = this.ActivatedRoute.snapshot.paramMap.get('adminid')
    profileId && this.adminService.getDetails(profileId).subscribe({
      next: (value) => {
        console.warn(value);
        this.adminDetails = value

      },
      error: (value) => {
console.warn('error',value);
      },
      complete: () => {

      }
    })
  }
}
