import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeIndexComponent } from "./home-index/home-index.component";
import { HomePageNotFoundComponent  } from "./home-page-not-found/home-page-not-found.component";

import { ProductRoutingModule } from '../product/product-routing.module';

const routes: Routes = [
  { path: 'home', component: HomeIndexComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomePageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductRoutingModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
