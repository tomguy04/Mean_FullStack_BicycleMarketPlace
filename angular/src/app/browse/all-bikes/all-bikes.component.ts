import { Component, OnInit } from '@angular/core';
import { Service } from '../../object.service';
import { Bike } from '../../bike';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-bikes',
  templateUrl: './all-bikes.component.html',
  styleUrls: ['./all-bikes.component.css']
})
export class AllBikesComponent implements OnInit {
  bikes: Bike[]=[];

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
  }

}
