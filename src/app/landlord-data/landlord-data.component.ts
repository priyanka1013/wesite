import { Component } from '@angular/core';

import { DetailsComponent } from './details/details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-landlord-data',
  templateUrl: './landlord-data.component.html',
  styleUrls: ['./landlord-data.component.css']
})
export class LandlordDataComponent {


  constructor(
    private dilogRef: MatDialog,
   
  ) { }
  opendialog() {
    this.dilogRef.open(DetailsComponent, {
    
      width: '60%',
      height: '600px',

    

    });
  }
}
