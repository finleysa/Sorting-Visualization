import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'sorting',
    loadChildren: () => import('./sorting/sorting.module').then(m => m.SortingModule)
  },
  {
    path: 'pathfinding',
    loadChildren: () => import('./pathfinding/pathfinding.module').then(m => m.PathfindingModule)
  },
  {
    path: 'htb',
    loadChildren: () => import('./htb/htb.module').then(m => m.HtbModule),
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }