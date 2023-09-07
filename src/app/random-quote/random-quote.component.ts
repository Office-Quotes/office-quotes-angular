import { Component } from '@angular/core';
import { OfficeApiService } from '../api-service/office-api.service';
import { Quote } from '../api-service/quote.class';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-random-quote',
  templateUrl:'./random-quote.component.html',
  styleUrls: ['./random-quote.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatTabsModule, MatCardModule]
})
export class RandomQuoteComponent {
  public quote = new Quote("", "");
  
  constructor(public officeApiService: OfficeApiService){}

  ngOnInit() {
    this.officeApiService.getOfficeQuote().subscribe((data: any) => {
      this.quote = new Quote(data.quote, data.character);
      console.log(this.quote)
    },
    (error:any) => {
      console.log("An error occured: ", error)
    }
    )
  }
}
