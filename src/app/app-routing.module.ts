import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MycomponentComponent }  from './mycomponent/mycomponent.component';

const routes: Routes = [
  // { path: 'stuff', component: MycomponentComponent }
  { path: 'stuff', component: AppComponent }
];

@NgModule({
  // imports: [
  //   CommonModule
  // ],
  // declarations: []


  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]

})
export class AppRoutingModule { }
