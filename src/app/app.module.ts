import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeasonsDropdownComponent } from './seasons-dropdown/seasons-dropdown.component';
import { EpisodeDropdownComponent } from './episode-dropdown/episode-dropdown.component';
import { EpisodeInfoComponent } from './episode-info/episode-info.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    SeasonsDropdownComponent,
    EpisodeDropdownComponent,
    NavBarComponent,
    RandomQuoteComponent,
    EpisodeInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    MatInputModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
