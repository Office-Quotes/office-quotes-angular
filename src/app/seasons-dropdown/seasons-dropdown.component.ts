import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-seasons-dropdown',
  templateUrl: './seasons-dropdown.component.html',
  styleUrls: ['./seasons-dropdown.component.css']
})
export class SeasonsDropdownComponent {
  seasons: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  selectedSeason: number | null = null;
  seasonData: any;
  
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.selectedSeason = this.seasons[0];
    this.fetchSeasonData(this.selectedSeason);
  }

  onSeasonChange(): void {
    if(this.selectedSeason) {
      this.fetchSeasonData(this.selectedSeason);
    }
  }

  fetchSeasonData(seasonNumber: number): void {
    const seasonUrl = `https://officeapi.akashrajpurohit.com/season/${seasonNumber}`;

    this.http.get(seasonUrl).subscribe(data => {
      this.seasonData = data;
      console.log(data)
    });

  }

}
