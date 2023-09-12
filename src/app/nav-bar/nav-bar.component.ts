import { Component, NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCommonModule } from '@angular/material/core';
import { AppComponent } from '../app.component';
import { OfficeApiService } from '../api-service/office-api.service';
import { RandomQuoteComponent } from '../random-quote/random-quote.component';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-nav-bar',
  templateUrl: '../random-quote/random-quote.component.html',
  styleUrls: ['../random-quote/random-quote.component.css']
})
export class NavBarComponent { }