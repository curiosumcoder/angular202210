import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeRootComponent } from './home-root/home-root.component';
import { HomeIndexComponent } from './home-index/home-index.component';
import { HomePageNotFoundComponent } from './home-page-not-found/home-page-not-found.component';


@NgModule({
  declarations: [
    HomeRootComponent,
    HomeIndexComponent,
    HomePageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HomeRoutingModule
  ],
  bootstrap: [HomeRootComponent]
})
export class HomeModule { }
