import { Component } from '@angular/core';
import { LoginserviceService } from 'src/app/login/loginservice.service';
import { PaymentComponent } from './payment/payment.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-requesting',
  templateUrl: './requesting.component.html',
  styleUrls: ['./requesting.component.css']
})
export class RequestingComponent {
  user: any;
  data: any;

  constructor(private service: LoginserviceService,  private dilogRef: MatDialog,) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("login_data") || '{}')
    console.log(this.user)
    this.getpurchasedata(this.user.INT_user_id);
  }

  getpurchasedata(user_id: any) {

    var list={
      INT_user_id:user_id,
      bt_is_landlord: this.user.VC_user_type == 'tenent'? false : true
    }

    this.service.Getpurchase(list).subscribe((res: any) => {
      this.data = res['Data']
      console.log(res)
    })
  }

  
  opendialog() {
    this.dilogRef.open(PaymentComponent, {
    
      width: '60%',
      height: '700px',
    });
  }
}
