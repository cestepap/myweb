import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyHomeComponent } from './components/body-home/body-home.component';
import { BodyAboutComponent } from './components/body-about/body-about.component';
import { BodyWorkComponent } from './components/body-work/body-work.component';
import { BodyContactComponent } from './components/body-contact/body-contact.component';


const routes: Routes = [

  { path: '', component: BodyHomeComponent },


  { path: 'about', component: BodyAboutComponent },
  { path: 'work', component: BodyWorkComponent },
  { path: 'contact', component: BodyContactComponent },

  { path: '**', component: BodyHomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
