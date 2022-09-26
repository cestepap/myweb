import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { BodyWorkComponent } from './components/body-work/body-work.component';
import { BodyContactComponent } from './components/body-contact/body-contact.component';
import { BodyAboutComponent } from './components/body-about/body-about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyHomeComponent,
    BodyWorkComponent,
    BodyContactComponent,
    BodyAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
