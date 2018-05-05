import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-status',
  templateUrl: './manage-status.component.html',
  styleUrls: ['./manage-status.component.css']
})
export class ManageStatusComponent implements OnInit {
  currentGame: string;
  
    constructor(private _route: ActivatedRoute) { }
  
    ngOnInit() {
      this._route.paramMap
        .subscribe(params => {
          this.currentGame = params.get('id');
          console.log('Current game is Game ', this.currentGame);
        });
    }

}
