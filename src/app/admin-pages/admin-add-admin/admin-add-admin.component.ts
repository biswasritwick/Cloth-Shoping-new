import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { adminData } from 'src/app/datatyps';
import { AdminServiceService } from 'src/app/services/admin-service.service';


@Component({
  selector: 'app-admin-add-admin',
  templateUrl: './admin-add-admin.component.html',
  styleUrls: ['./admin-add-admin.component.css']
})
export class AdminAddAdminComponent {
  private subscriptions: Subscription[] = [];
  public servicecheck = true
  public telecallercheck = false
  public adminAllemploy: adminData []= []
  constructor(private adminservice: AdminServiceService) { }

  ngOnInit() {
    this.getAllAdminData()
  }
  private getAllAdminData() {
    this.adminservice.logData()
    this.adminservice.employeLogData.subscribe({
      next: (value: adminData) => {
        console.log(value);
        this.adminAllemploy = [value]
        this.adminAllemploy.forEach((element: adminData) => {
          console.warn(element.service);
          console.warn(element);
          if (element.service === false && element.telecaller === true) {
            alert('You are not this page')
            console.warn(element.service);

          }
        });

      },
      error: (err: any) => {
        console.warn(err, 'localStorage data not found');

      },
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

  // add user form data
  public addUserdata(data: any) {

    let date = new Date()  //date stamp
    var da = date.toLocaleDateString()    //date stamp
    let adminFormData = {  //date stamp + rescive form data
      ...data,
      createdOn: da

    }
    this.subscriptions.push(this.adminservice.adminAdded(adminFormData).subscribe({
      next: (result) => {
        if (result) {
          console.warn(true);
        }
      },
      error: (error) => {
        console.log("Form api error!", error);
      },
      complete: () => {
        console.warn('complete');
      }
    }))
  }



}
