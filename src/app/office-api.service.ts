import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OfficeApiService {

  constructor(
    private http:HttpClient
  ) { }

  apiCall(){
    return this.http.get('https://officeapi.akashrajpurohit.com/quote/random');
  }
}
