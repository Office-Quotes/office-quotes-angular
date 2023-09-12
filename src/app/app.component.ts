import { Component } from '@angular/core';
import {OfficeApiService} from './api-service/office-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  NavBarComponent: any;
  title = 'office-quotes';
  constructor(public officeApiService: OfficeApiService){}  
}
