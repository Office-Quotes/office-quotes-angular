import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-episode-info',
    templateUrl: './episode-info.component.html',
    styleUrls: ['./episode-info.component.css']
})
export class EpisodeInfoComponent{
    seasonNumber: number = 1;
    seasonData: any;;

    constructor(public http: HttpClient){
        this.fetchSeasonData(this.seasonNumber);
    }

    fetchSeasonData(seasonNumber: number) {
        const seasonUrl = `https://officeapi.akashrajpurohit.com/season/${seasonNumber}`;
        this.http.get(seasonUrl).subscribe((data) => {
            this.seasonData = data;
        },
        (error) => {
            console.log("Error fetching data: ", error);
        }
        );
    }

    onSeasonChange(){
        this.fetchSeasonData(this.seasonNumber);
    }

}