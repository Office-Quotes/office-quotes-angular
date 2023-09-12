import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { AppComponent } from './app.component';
import {MatCommonModule} from '@angular/material/core';

const routes: Routes = [
  { path:'', component: AppComponent },
  { path: 'random-quote', component:RandomQuoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
