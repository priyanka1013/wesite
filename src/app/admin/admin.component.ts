import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  showme: boolean = false
  user:any
  
  constructor( private router: Router) { }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem("login_data") || '{}')
    console.log(this.user.VC_user_name)
}
yes(){
  localStorage.removeItem("register_data")
  this.router.navigate(['login']);
}
}