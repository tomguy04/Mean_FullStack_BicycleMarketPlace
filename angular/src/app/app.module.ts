import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

import { Service } from './object.service'
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';// <-- Import HttpModule
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { ReadGameStatusComponent } from './read-game-status/read-game-status.component';
import { UpdateGameStatusComponent } from './update-game-status/update-game-status.component';

import { CookieModule } from 'ngx-cookie';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';
import { CreateListingComponent } from './listings/create-listing/create-listing.component';
import { EditDeleteListingComponent } from './listings/edit-delete/edit-delete-listing/edit-delete-listing.component';
import { AllBikesComponent } from './browse/all-bikes/all-bikes.component';
import { EditDeleteComponent } from './listings/edit-delete/edit-delete.component';
import { BikeFormComponent } from './listings/create-listing/bike-form/bike-form.component';

 import { FilterPipe } from './search.pipe';
// import { GameOneComponent } from './game-one/game-one.component';
// import { GameTwoComponent } from './game-two/game-two.component';
// import { GameThreeComponent } from './game-three/game-three.component'; 




@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    ManagePlayersComponent,
    ManageStatusComponent,
    ReadGameStatusComponent,
    UpdateGameStatusComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BrowseComponent,
    ListingsComponent,
    CreateListingComponent,
    EditDeleteListingComponent,
    AllBikesComponent,
    EditDeleteComponent,
    BikeFormComponent,
    FilterPipe
    // GameOneComponent,
    // GameTwoComponent,
    // GameThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CookieModule.forRoot()
  ],
  providers: [Service, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
