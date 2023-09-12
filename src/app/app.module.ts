import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { Quote } from './api-service/quote.class';
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
import { OfficeApiService } from './api-service/office-api.service';
import { ErrorComponent } from './error/error.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCommonModule } from '@angular/material/core';

const appRoutes: Routes = [
    { path: '', component:AppComponent }, //localhost:4200/
    { path: 'random-quote', component:RandomQuoteComponent },
    { path: 'episode-info', component:EpisodeInfoComponent },
    { path: 'episode-dropdown', component:EpisodeDropdownComponent},
    { path: '**', component:ErrorComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SeasonsDropdownComponent,
    EpisodeDropdownComponent,
    EpisodeInfoComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    RandomQuoteComponent,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCommonModule,
    NgFor,
    MatInputModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [OfficeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
