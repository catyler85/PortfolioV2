import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WebsterComponent } from './webster/webster.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'webster',
    component:WebsterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
