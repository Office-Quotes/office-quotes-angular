import { Component } from '@angular/core';
import {OfficeApiService} from './office-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'office-quotes-angular';
  constructor(private api:OfficeApiService) {

  }
  ngOnInit() {
    this.api.apiCall().subscribe((data) => {
      console.warn("get office api data", data);
    })
  }
}
