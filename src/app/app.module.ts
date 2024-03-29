import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';


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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



const appRoutes: Routes = [
    { path: '', component:AppComponent }, //localhost:4200/
    { path: 'random-quotes', component:RandomQuoteComponent },
    { path: 'episode-info', component:EpisodeInfoComponent },
    { path: 'episode-dropdown', component:EpisodeDropdownComponent},
    { path: 'season-dropdown', component:SeasonsDropdownComponent},
    { path: '**', component:ErrorComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    SeasonsDropdownComponent,
    EpisodeDropdownComponent,
    NavBarComponent,
    RandomQuoteComponent,
    EpisodeInfoComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [OfficeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
