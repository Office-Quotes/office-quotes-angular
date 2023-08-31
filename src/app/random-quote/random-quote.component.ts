import { Component } from '@angular/core';
import { OfficeApiService } from '../api-service/office-api.service';
import { Quote } from '../api-service/quote.class';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css']
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
