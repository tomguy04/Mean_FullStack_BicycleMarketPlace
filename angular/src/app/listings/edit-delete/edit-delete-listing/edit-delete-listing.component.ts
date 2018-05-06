import { Component, OnInit } from '@angular/core';
import { Service } from '../../../object.service';
import { Bike } from '../../../bike';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../../../user';



@Component({
  selector: 'app-edit-delete-listing',
  templateUrl: './edit-delete-listing.component.html',
  styleUrls: ['./edit-delete-listing.component.css']
})
export class EditDeleteListingComponent implements OnInit {

  bikes: Bike[]=[];
  user : User;
  
    constructor(
       private _Service: Service,
       private _router: Router
       ) { }
  
    ngOnInit() {
      console.log('in edit-bikes/user ')
      
      this._Service.getUser().subscribe(
        user => {
          this.user = user,
          console.log('the user in edit-delete comp ', this.user)
        }
      );
      
      this._Service.getBikes().subscribe(
        bikes => {
          this.bikes = bikes,
          console.log('the myBikes in read comp ', this.bikes)
        }
      );
    }
  
  }
