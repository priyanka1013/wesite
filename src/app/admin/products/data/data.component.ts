import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginserviceService } from 'src/app/login/loginservice.service';
import Swal from 'sweetalert2';
import { PaymentComponent } from '../../requesting/payment/payment.component';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent {
  user:any;
    
  constructor(
  
    @Inject(MAT_DIALOG_DATA) public item: any,private service:  LoginserviceService,
    public dialogRef:MatDialogRef<DataComponent>
    ) { 

    }
    
    ngOnInit(): void {
     this.user= JSON.parse(localStorage.getItem("login_data") || '{}')
    }
    showrequest:boolean =false
    request(){
      this.showrequest  =true
    }
    agree(){
     
      var list = {
        "INT_user_id": this.user.INT_user_id,
        "INT_product_id": this.item.INT_product_id,
        "INT_Landlord_id": this.item.Int_lanlord_id
     
      }
      this.service.add_requesting(list).subscribe((res: any) => {

        if (res['Success'] == true){
          Swal.fire({
            icon: 'success',
            title: res['Message'],
            showConfirmButton: false,
          })
        }
      else{
        Swal.fire(res['Message'])
      }
        })
    
    }
    
    disagree(){
      Swal.fire(' Thank you!!! see you again')
    }
    
   
}
