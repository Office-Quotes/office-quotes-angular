import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OfficeApiService {

  constructor(
    public http:HttpClient
  ) { }

  getOfficeQuote(){
    return this.http.get('https://officeapi.akashrajpurohit.com/quote/random');
  }
}
