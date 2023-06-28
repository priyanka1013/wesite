import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/login/loginservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  add_detail!: FormGroup;
  user: any;

  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public item: any, private fb: FormBuilder,
    private service: LoginserviceService, private router: Router) {

  }
  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem("login_data") || '{}')

    this.add_detail = this.fb.group({
      INT_product_id: [''],
      VC_product_image: ['', [Validators.required,]],
      VC_product_property_name: ['', [Validators.required,]],
      VC_product_address: ['', [Validators.required,]],
      VC_product_rent_amount: ['', [Validators.required,]],
      VC_product_security_deposit: ['', [Validators.required,]],
      VC_product_type: ['', [Validators.required,]],
      Int_landlord_id: ['']

    })

    if (this.item != null) {
      this.add_detail.controls['INT_product_id'].setValue(this.item.INT_product_id)
      this.add_detail.controls['VC_product_image'].setValue(this.item.VC_product_image)
      this.add_detail.controls['VC_product_property_name'].setValue(this.item.VC_product_property_name)
      this.add_detail.controls['VC_product_address'].setValue(this.item.VC_product_address)
      this.add_detail.controls['VC_product_rent_amount'].setValue(this.item.VC_product_rent_amount)
      this.add_detail.controls['VC_product_security_deposit'].setValue(this.item.VC_product_security_deposit)
      this.add_detail.controls['VC_product_type'].setValue(this.item.VC_product_type)
      this.add_detail.controls['Int_landlord_id'].setValue(this.item.Int_landlord_id)
    }
  }

  purchases_detail() {
    if (this.add_detail.valid) {
      this.add_detail.controls['Int_landlord_id'].setValue(this.user.INT_user_id);


      this.service.insert_purchase(this.add_detail.value).subscribe((res: any) => {

        localStorage.setItem("add_detail", JSON.stringify(res['Data']))
        console.log(res)



        if (res['Success'] == true) {
          this.close()
        }

        Swal.fire(res['Message'])
      })
    }
    else {

      Swal.fire('Please enter all the details')
    }
  }

  close(): void {
    this.dialogRef.close()

  }
}
