import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeasonsDropdownComponent } from './seasons-dropdown/seasons-dropdown.component';
import { EpisodeDropdownComponent } from './episode-dropdown/episode-dropdown.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasonsDropdownComponent,
    EpisodeDropdownComponent,
    RandomQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
