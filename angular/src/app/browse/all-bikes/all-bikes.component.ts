import { Component, OnInit } from '@angular/core';
import { Service } from '../../object.service';
import { Bike } from '../../bike';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../../user';

@Component({
  selector: 'app-all-bikes',
  templateUrl: './all-bikes.component.html',
  styleUrls: ['./all-bikes.component.css']
})
export class AllBikesComponent implements OnInit {
  bikes: Bike[]=[];
  user : User;
  contactUser : User = new User();
  // search: Bike = new Bike();

  constructor(
     private _Service: Service,
     private _router: Router
     ) { }

  ngOnInit() {
    console.log('in all-bikes read')
    this._Service.getBikes().subscribe(
      bikes => {
        this.bikes = bikes,
        console.log('the bikes in read comp ', this.bikes)
      }
    );
    this._Service.getUser().subscribe(
      user => {
        this.user = user,
        console.log('the user in edit-delete comp ', this.user)
      }
    );
  }

  onDelete(id: string) {
    console.log('delete bike', id);
    this._Service.deleteBike(id)
    .subscribe( returnedBike=> {
      console.log('Returned Bike to delete ', returnedBike)
       this.bikes = this.bikes.filter(p => p._id !== returnedBike._id);
       console.log(this.bikes);
    });
  }

  onContact(userId: string) {

    //this._Service.getContactFindOne(userId);
    this._Service.getContactFindOne(userId)
    .subscribe(user => {
        console.log('back to all-bikes', user);
        window.alert(user.email);
      }
    );

    // console.log('contact user', user.email);
    // window.alert(user.email);
  }

}
