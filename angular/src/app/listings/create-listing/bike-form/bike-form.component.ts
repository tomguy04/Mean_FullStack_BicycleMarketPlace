import { Component, OnInit } from '@angular/core';
import { Service } from '../../../object.service';
import { Bike } from '../../../bike';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.css']
})
export class BikeFormComponent implements OnInit {
  bike: Bike = new Bike();
  constructor(
    private _Service: Service,
    private _router : Router
  ) { }

  ngOnInit() {
  }
  
  onSubmit(formData:NgForm){
    event.preventDefault();
    const {value, valid} = formData;
    console.log('submitted', this.bike);
     this._Service.createBike(this.bike).subscribe(bike =>{
       console.log('created bike in create ', bike);
       this.bike = new Bike();
       formData.reset();
       this._router.navigateByUrl('listings');
     })
  }
}

