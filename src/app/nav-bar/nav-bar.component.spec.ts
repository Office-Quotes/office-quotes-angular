import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatTabGroup} from '@angular/material/tabs';
import { NavBarComponent } from './nav-bar.component';
import {MatTabsModule} from '@angular/material/tabs';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent]
    });
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
