import { Component, OnInit} from '@angular/core';
import { Quote } from '../api-service/quote.class';
import { OfficeApiService } from '../api-service/office-api.service';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import {MatCommonModule} from '@angular/material/core';


@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatTabsModule, MatCardModule]
})
export class RandomQuoteComponent {
  public quote = new Quote("", "");
  
  constructor(public officeApiService: OfficeApiService){}

  ngOnInit() {
    this.newOfficeQuote();
  }
    newOfficeQuote() {
      this.officeApiService.getOfficeQuote().subscribe((quote: any) => {
        this.quote = new Quote(quote.quote, quote.character)
      }),
    (error:any) => {
      console.log("An error occured: ", error);
    }
  }
}
