import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeIndexComponent } from "./home-index/home-index.component";
import { HomePageNotFoundComponent  } from "./home-page-not-found/home-page-not-found.component";

const routes: Routes = [
  { path: 'home', component: HomeIndexComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomePageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
