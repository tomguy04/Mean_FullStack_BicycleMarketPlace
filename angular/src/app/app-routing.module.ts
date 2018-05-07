import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
// import { CreateComponent } from './create/create.component';
// import { ReadComponent } from './read/read.component';
// import { ManagePlayersComponent } from './manage-players/manage-players.component';
// import { ManageStatusComponent } from './manage-status/manage-status.component';
// import { ReadGameStatusComponent } from './read-game-status/read-game-status.component';
// import { UpdateGameStatusComponent } from './update-game-status/update-game-status.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';

import {HomeComponent} from './home/home.component';
import {LogoutComponent} from './home/logout/logout.component';


const routes: Routes = [
  //define rules
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'listings',
    component:ListingsComponent //drills down to form to create bike
  },
  {
    path:'browse',
    component:BrowseComponent //was manage players "Manage Player | Manage Status"
  },
  {
    path:'',
    component: HomeComponent
  },
  /////////////
  // {
  //   path:'players',
  //   component: ManagePlayersComponent,
  //   children: [
  //     {
  //       path:'list',
  //       component: ReadComponent
  //     },
  //     {
  //       path:'create',
  //       component: CreateComponent
  //     }
  //   ]
  // },

  // {
  //   path: 'status/game/:id',
  //   component: StatusComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: GameStatusComponent,
  //     },
  //   ]
  // }

  // {
  //   path:'status/game/:id',
  //   component: ManageStatusComponent, // this should have the Game 1 with 1 2 and 3 as links.
  //   children : [
  //       {
  //         path:'',
  //         component : ReadGameStatusComponent
  //       }
  //     ]
  // }

  // {
  //   path:'status',
  //   component: ManageStatusComponent,
  //   children : [
  //       {
  //         path:'game',
  //         component : ReadGameStatusComponent,
  //         children :[ 
  //           {
  //             path : '1',
  //             component : GameOneComponent
  //           },
  //           {
  //             path : '2',
  //             component : GameTwoComponent
  //           },
  //           {
  //             path : '3',
  //             component : GameThreeComponent
  //           }
  //        ] 
  //       }
  //     ]
  // }
]


@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// {
//   path: 'products',
//   //pathMatch: 'full',
//   // component: ReadComponent,
//   children: [{
//      path:'new', 
//      pathMatch: 'full',
//      component : CreateComponent
//   },
