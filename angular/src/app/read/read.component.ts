import { Component, OnInit } from '@angular/core';
import { Service } from '../object.service';
import { Player } from '../player';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
//import { OrderByDatePipe } from '../pipes/order-by-date.pipe';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
  //providers: [OrderByDatePipe] 
})
export class ReadComponent implements OnInit {
  players: Player[]=[];
 // players:  Player[];

  constructor(
    private _Service: Service,
    private _router: Router
    ) { }

  ngOnInit() {
    console.log('in read')
    this._Service.getPlayers().subscribe(
      players => {
        this.players = players,
        console.log('the players in read comp ', this.players)
      }
    );
  }

  onDelete(id: string) {
    console.log('delete player', id);
    this._Service.deletePlayer(id)
    .subscribe(returnedPlayer => {
      console.log('Returned Player to delete ', returnedPlayer)
       this.players = this.players.filter(p => p._id !== returnedPlayer._id);
       console.log(this.players);
       //this.ngOnInit();
      //  this._router.navigateByUrl('/players/list', {skipLocationChange: true}).then(()=>
      //  this._router.navigate(["Your actualComponent"]));
       //this._router.navigateByUrl('/players/list');
    });
  }

  // onDelete(id:number){
  //   this._Service.deletePlayer(id)
  //   .subscribe(returnedPlayers => {
  //     console.log('got ', returnedPlayers,  ' back from delete');
  //     this.players = returnedPlayers;
  //   })
  // }


}




