import { Component } from '@angular/core';
import {FormControl, FormsModule} from '@angular/forms';
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
  status = new FormControl('');
  statusList: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
}
