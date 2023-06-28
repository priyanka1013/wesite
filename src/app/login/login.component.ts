import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_data!: FormGroup;
  register_data!: FormGroup;
  Email: any;
  constructor(private fb: FormBuilder, private service: LoginserviceService, private router: Router) {

  }
  ngOnInit(): void {
    this.login_data = this.fb.group({
      VC_user_email: ['', [Validators.required, Validators.email,]],
      VC_user_password: ['', [Validators.required, Validators.minLength(6)]]
    })
    {

      {
        this.register_data = this.fb.group({
          VC_user_name: ['', [Validators.required,]],
          VC_user_email: ['', [Validators.required, Validators.email,]],
          VC_user_password: ['', [Validators.required, Validators.minLength(6)]],
          user_type: ['', [Validators.required,]]

        })
      }
    }

  }
  showme: boolean = false
  register() {
    this.showme = true;

  }

  login() {
    this.showme = false
  }
  storelogindata() {
    this.service.get_logindetails(this.login_data.value).subscribe((res: any) => {
      localStorage.setItem("login_data", JSON.stringify(res['Data']))
      console.log(res)
      if (res['Success'] == true) {
        this.router.navigate(['/admin/home']);
      }

      Swal.fire(res['Message'])
    })
  }
  register_detail() {

    console.log(this.register_data, 'asjnsjakfndjkfnfsd')
    this.service.register(this.register_data.value).subscribe((res: any) => {
      this.showme = false;
      localStorage.setItem("register_data", JSON.stringify(res['Data']))
      // console.log(res)



      if (res['Success'] == true)
        // {
        //   this.router.navigate(['/admin/home']);
        // }

        Swal.fire(res['Message'])
    })

  }


}


