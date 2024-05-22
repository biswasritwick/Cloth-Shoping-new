import { Component } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { adminData } from 'src/app/datatyps';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-update-list',
  templateUrl: './admin-update-list.component.html',
  styleUrls: ['./admin-update-list.component.css']
})
export class AdminUpdateListComponent {

  public editAdminDatalist: adminData | undefined
 
  //constructor
  constructor(private adminservice: AdminServiceService, private Activatedroute: ActivatedRoute) { }

  ngOnInit() {
    let adminId = this.Activatedroute.snapshot.paramMap.get('adminid')
    adminId && this.adminservice.getDetails(adminId).subscribe({
      next: (result) => {
        this.editAdminDatalist = result
        // console.warn(this.editAdminDatalist.firstname);

      },
      error: (value) => {
        console.warn('error', value);
      },
      complete: () => {
        this.updateValue()
      }
    })

  }

  adduserForm = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.maxLength(20)]),
    lastname: new FormControl("", [Validators.required, Validators.maxLength(20)]),
    password: new FormControl("", [Validators.required, Validators.maxLength(6)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required, Validators.maxLength(10)]),
    workphone: new FormControl("", [Validators.required, Validators.maxLength(10)]),
    service: new FormControl(true, [Validators.required]),
    telecaller: new FormControl(false),
  })

  get firstname() {
    return this.adduserForm.get('firstname')
  }
  get lastname() {
    return this.adduserForm.get('lastname')
  }
  get password() {
    return this.adduserForm.get('password')
  }
  get email() {
    return this.adduserForm.get('email')
  }
  get phone() {
    return this.adduserForm.get('phone')
  }
  get workphone() {
    return this.adduserForm.get('workphone')
  }

  updateValue() {     //update value as per API link
    this.adduserForm.setValue({
      firstname: String(this.editAdminDatalist?.firstname),
      lastname: String(this.editAdminDatalist?.lastname),
      password: String(this.editAdminDatalist?.password),
      email: String(this.editAdminDatalist?.email),
      phone: String(this.editAdminDatalist?.phone),
      workphone: String(this.editAdminDatalist?.workphone),
      service: Boolean(this.editAdminDatalist?.service),
      telecaller: Boolean(this.editAdminDatalist?.telecaller)
    })
  }

  // update user form data
  public addUpdateUserdata(data: any) {  
    if (this.editAdminDatalist!) {
      data.id = this.editAdminDatalist.id
    }

    if (this.adduserForm.valid) {
      this.adminservice.UpdateDetails(data).subscribe({
        next: (res) => {
          console.warn(res);

        }
      })

    } else {
      console.warn('error');

    }
  }
}
