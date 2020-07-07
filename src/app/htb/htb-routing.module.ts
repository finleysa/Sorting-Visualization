import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtbComponent } from './htb.component';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  { path: '', component: HtbComponent },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtbRoutingModule {}
