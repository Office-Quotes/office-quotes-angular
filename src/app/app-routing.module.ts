import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { AppComponent } from './app.component';
import { EpisodeDropdownComponent } from './episode-dropdown/episode-dropdown.component';
import { EpisodeInfoComponent } from './episode-info/episode-info.component';
import { SeasonsDropdownComponent } from './seasons-dropdown/seasons-dropdown.component';

const routes: Routes = [
  { path:'home', component: AppComponent },
  { path: 'random-quote', component:RandomQuoteComponent },
  { path: 'episode-info', component:EpisodeInfoComponent },
  { path: 'episode-dropdown', component:EpisodeDropdownComponent },
  { path: 'season-dropdown', component:SeasonsDropdownComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
