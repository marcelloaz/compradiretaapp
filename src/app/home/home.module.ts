import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { PagesPage } from '../pages/pages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'page',
        component: PagesPage
      },
      {
        path: 'page/:id',
        component: PagesPage
      }
    ])
  ],
  declarations: [HomePage,PagesPage]
})

export class HomePageModule  {}


