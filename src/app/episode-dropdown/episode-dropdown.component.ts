import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OfficeApiService } from '../api-service/office-api.service';


@Component({
  selector: 'app-episode-dropdown',
  templateUrl: './episode-dropdown.component.html',
  styleUrls: ['./episode-dropdown.component.css']
})
export class EpisodeDropdownComponent {
  status = new FormControl('');
  statusList: string[] = ['1', '2', '3', '4', '5', '6', '7', '8',
                          '9', '10', '11', '12', '13', '14', '15', '16',
                          '17', '18', '19', '20', '21', '22', '23', '24',
                          '25', '26'
                        ]

}
