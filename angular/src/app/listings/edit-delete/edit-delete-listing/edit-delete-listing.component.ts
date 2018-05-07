import { Component, OnInit } from '@angular/core';
import { Service } from '../../../object.service';
import { Bike } from '../../../bike';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../../../user';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edit-delete-listing',
  templateUrl: './edit-delete-listing.component.html',
  styleUrls: ['./edit-delete-listing.component.css'],

})
export class EditDeleteListingComponent implements OnInit {

  bikes: Bike[]=[];
  user : User;
  bike: Bike = new Bike();
  sub: Subscription;
  
    constructor(
       private _Service: Service,
       private _router: Router,
       
       ) { }
  
    ngOnInit() {
      console.log('in edit-bikes/user ')
      
      

      this._Service.getUser().subscribe(
        user=> {
          this.user = user,
          console.log('the user in edit-delete comp ', this.user)
        }
      );

      //
      
      
      // this._Service.getBikes().subscribe(
      //   bikes => {
          
      //     console.log('user ', this.user1.user._id);
      //     this.bikes = bikes//.filter(p=> p._id === this.user1._id)
      //     console.log('bikes ', this.bikes);
      //     //console.log('the bikes in read comp ', this.bikes)
      //   }
      // );

      // this._Service.getBikes().subscribe(
      //   bikes => {
      //     this.bikes = bikes,
      //     console.log('the myBikes in read comp ', this.bikes)
      //   }
      // );
    }

    onSubmit(formData:NgForm, bikeId: string){
      event.preventDefault();
      const {value, valid} = formData;
      console.log('formData is ', value);
      

      this.sub = this._Service.editBike(value)
      .subscribe(
        updatedBike => {
          console.log('updted bike ', updatedBike),
          this.user.bike = this.user.bike.filter(p => p._id !== updatedBike._id);
          this.user.bike.push(updatedBike);
        }
      );
      //this._Service.createBike(this.bike).subscribe(bike =>{
      //    console.log('created bike in create ', bike);
      //    this.bike = new Bike();
      //    formData.reset();
      //    this._router.navigateByUrl('listings');
      //  })
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


  
  }
