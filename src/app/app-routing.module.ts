import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './compenents/user/user.component'
import {AuthComponent } from './compenents/auth/auth.component'
import {DetailsComponent}  from './compenents/details/details.component'

const routes: Routes = [
  {path:'index',component:UserComponent},
  {path:'auth',component:AuthComponent},
  {path:'detailsUsers/:id',component:DetailsComponent},
  {path:'user',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
