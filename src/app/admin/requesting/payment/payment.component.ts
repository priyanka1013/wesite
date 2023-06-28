import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/login/loginservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  login_data!: FormGroup
  payment_data !: FormGroup
  showme: boolean = false
  user: any;
  productlist: any;
  constructor(
    public dialogRef: MatDialogRef< PaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public item: any, private fb: FormBuilder,
    private service: LoginserviceService, private router: Router) {

  }
  ngOnInit(): void {

    

    this.user = JSON.parse(localStorage.getItem("payment_data") || '{}')
    this.payment_data = this.fb.group({
      VC_card_name: ['', [Validators.required,]],
      VC_date: ['', [Validators.required,]],
      VC_payment_type: ['', [Validators.required,]],
      VC_expiry_date: ['', [Validators.required,]],
      VC_card_number: ['', [Validators.required,]],

      VC_security_code: ['', [Validators.required,]]

    })

  }

  payment_detail() {
    if (this.payment_data.valid){
    this.service.insert_payment(this.payment_data.value).subscribe((res: any) => {

      localStorage.setItem("payment_data ", JSON.stringify(res['Data']))
      // console.log(res)



      if (res['Success'] == true)
       {
        this.close()
      }

        Swal.fire({
      
          icon: 'success',
          title: 'Payment successfully done.',
          showConfirmButton: false,
          timer: 1500
        })
    })

    // Returning The PurchasesFor Landlord
    }
    else{
      Swal.fire('Please enter all the details')
    }
  }
  close(): void {
    this.dialogRef.close()
  }
  
  currentDate = new Date();
  public date = new Date();
}  



