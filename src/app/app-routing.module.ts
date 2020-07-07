import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortingModule } from './sorting/sorting.module';


const routes: Routes = [
  {
    path: 'sorting',
    loadChildren: () => import('./sorting/sorting.module').then(m => m.SortingModule)
  },
  {
    path: 'pathfinding',
    loadChildren: () => import('./pathfinding/pathfinding.module').then(m => m.PathfindingModule)
  },
  { path: '**', redirectTo: '/sorting'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }