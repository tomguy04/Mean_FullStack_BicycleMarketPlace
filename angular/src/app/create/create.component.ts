import { Component, OnInit } from '@angular/core';
import { Service } from '../object.service';
import { Player } from '../player';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  player: Player = new Player();
  constructor(
    private _Service: Service,
    private _router : Router
  ) { }

  ngOnInit() {
  }
  
  onSubmit(formData:NgForm){
    event.preventDefault();
    const {value, valid} = formData;
    console.log('create component', this.player);
    this._Service.create(this.player).subscribe(player =>{
      console.log('created player in create ', player);
      this.player = new Player();
      formData.reset();
      this._router.navigateByUrl('players/list');
    })
  }

 

  // this.bookService.createBook(this.book).subscribe(book => {
  //   // this.createBook.emit(book);
  //   this.router.navigateByUrl('/');
  //   this.book = new Book();

  // onSubmit(formData:NgForm){
  //   event.preventDefault();
  //   const {value, valid} = formData;
  //   console.log('create component', this.player);
  //   this._Service.create(this.player);
  //   this.player = new Player();
  //   formData.reset();
  // }
}