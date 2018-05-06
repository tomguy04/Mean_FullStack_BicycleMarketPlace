import { Component, OnInit } from '@angular/core';
import { Service } from '../../../object.service';
import { Bike } from '../../../bike';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-delete-listing',
  templateUrl: './edit-delete-listing.component.html',
  styleUrls: ['./edit-delete-listing.component.css']
})
export class EditDeleteListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
