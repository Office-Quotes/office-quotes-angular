import { Component } from '@angular/core';
import { OfficeApiService } from '../api-service/office-api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RandomQuoteComponent } from '../random-quote/random-quote.component';
import { AppComponent } from '../app.component';

@NgModule({
    declarations: [AppComponent, RandomQuoteComponent],
    imports: [RandomQuoteComponent, BrowserModule],
    providers: [OfficeApiService],
    bootstrap: [Component]
})
export class Quote {
    public quote: string;
    public character: string;

    constructor(quote:string,character:string){
        this.quote = quote;
        this.character = character;
    }
}