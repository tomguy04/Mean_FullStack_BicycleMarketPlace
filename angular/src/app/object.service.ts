import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; 
import { BehaviorSubject } from 'Rxjs';
import { Observable } from 'rxjs/Observable';
import { Player } from './player';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Http } from '@angular/http';
import { Bike } from './bike';
import { User } from './user';

@Injectable()
export class Service {
  playerObserver:BehaviorSubject<any> = new BehaviorSubject([]);

  //constructor(private _http: Http) { }
  constructor(private _http: HttpClient) { }


  createBike(bike: Bike):Observable<Bike>{
    console.log('Service create BIKE', bike);
    return this._http.post<Bike>('api/bikes', bike)
  }

  getUser():Observable<User>{
    console.log('Service getUser');
    return this._http.get<User>('api/user');
  }

  getBikes(): Observable<Bike[]> {
    return this._http.get<Bike[]>('api/bikes');
  }

  deleteBike(id: string): Observable<Bike> {
    console.log('in delete service');
    return this._http.delete<Bike>(`api/bikes/${id}`);
  }

  getContactFindOne(id:String):Observable<User>{
  //  getContactFindOne(id:String){
    console.log('Service getUser withid ', id);
    //console.log( this._http.get<User>('api/userdata/${id}'));
    return this._http.get<User>(`api/userdata/${id}`);
  }
  

  

  getPlayers(): Observable<Player[]> {
    return this._http.get<Player[]>('api/players');
    // return of(BOOKS);
  }

  deletePlayer(id: string): Observable<Player> {
    console.log('in delete service');
    return this._http.delete<Player>(`api/players/${id}`);
  }
  //executes this code
  //.delete('/players/:playerID', playerController.destroy) //delete a player
  //-----------------------------------------------------------------------
  // destroy(request, response) {
  //   Player.findByIdAndRemove(request.params.playerID)
  //     .then(player => response.json(player))
  //     .catch(console.log);
  // }

  getPlayer(playerId:string): Observable<Player> {
    console.log('Service is getting player ', playerId)
    return this._http.get<Player>(`api/players/${playerId}`);
  }

   //editPlayerStatus(playerId:string, status:string, gameNumber:number): Observable<Player>{
    //console.log('From Service playerId ', playerId, ' status ', status, ' gameNumber ', gameNumber);
    editPlayerStatus(player:Player): Observable<Player>{
      console.log ('service is updating with id ', player._id )
      return this._http.put<Player>(`api/players/${player._id}`, player)
  }

  // var query = {'username':req.user.username};
  // req.newData.username = req.user.username;
  // MyModel.findOneAndUpdate(query, req.newData, {upsert:true}, function(err, doc){
  //     if (err) return res.send(500, { error: err });
  //     return res.send("succesfully saved");
  // });

  // //---------------------------------
  //.get('/players/:playerID', playerController.show) //show/get A player

  // editPlayerStatus(playerId:string, status:string, gameNumber:number): Observable<Player[]>{
  //   console.log('From Service playerId ', playerId, ' status ', status, ' gameNumber ', gameNumber);
  //   return this._http.post<Player[]>(`api/players/edit`, id);
  // }

  //from here, we are returing a value to game-one.ts?
  //mimic delete function in read ts

  // getPlayerToEdit(id:number){
  //   console.log('id edit from service ', id);
  //   const product = this.myPRODUCTS.find(p => p.id == id)
  //   console.log(product);
  //   return of (product);
  // }




 
  create(player: Player) : Observable<Player>{
    console.log('Service create ', player);
    return this._http.post<Player>('api/players', player)
  }

    // createBook(book: Book): Observable<Book> {
  //   return this.http.post<Book>(this.base, book);
  // }
  // create(player: Player) {
  //   console.log('Service create ', player);
  //   this._http.post('api/player', player).subscribe(
  //     response => console.log(response),
  //     errorResponse => console.log('error from create service ',errorResponse)
  //   );
  // }


}