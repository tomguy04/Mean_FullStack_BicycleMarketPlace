import { Component, OnInit } from '@angular/core';
import { Service } from '../object.service';
import { Player } from '../player';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-read-game-status',
  templateUrl: './read-game-status.component.html',
  styleUrls: ['./read-game-status.component.css']
})
export class ReadGameStatusComponent implements OnInit {
  players: Player[]=[];
  currentGame: string;
  sub : Subscription;

  constructor(
    private _Service: Service,
    private _router: Router,
    private _route : ActivatedRoute
    ) { }

  ngOnInit() {
    console.log('in read-game')
    this._Service.getPlayers().subscribe(
      players => {
        this.players = players,
        console.log('the players in read comp ', this.players)
      }
    );
    this._route.paramMap
    .subscribe(params => {
      this.currentGame = params.get('id');
      console.log('Current game in read comp is Game ', this.currentGame);
    });
  }

    getPlayer(player:Player, status:string, gameNumber:number){
        console.log('get player with id', player._id, ' for ', status, ' for game ', gameNumber) ;
        if (gameNumber == 1){
          player.game1 = status;
        }
        else if(gameNumber == 2){
          player.game2 = status;
        }
        else{
          player.game3 = status;
        }

        this.sub = this._Service.editPlayerStatus(player)
        .subscribe(
          updatedPlayer => console.log(updatedPlayer),
          console.log
        );

      }

    determineStatus(player:Player){
      return(player[`game${this.currentGame}`]) as string
    }

  // changeGameStatus(playerId:string, status:string, gameNumber:number){
  //   console.log('edit player ', playerId, ' to ', status, ' for game ', gameNumber) ;
  //   this._Service.editPlayerStatus(playerId,status,gameNumber)
      // .subscribe(returnedPlayer => {
      // console.log('Returned Player to edit ', returnedPlayer)
      // this.players = this.players.filter(p => p.id !== returnedPlayer.id);
    // });
  }

