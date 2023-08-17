import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonsDropdownComponent } from './seasons-dropdown.component';

describe('SeasonsDropdownComponent', () => {
  let component: SeasonsDropdownComponent;
  let fixture: ComponentFixture<SeasonsDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonsDropdownComponent]
    });
    fixture = TestBed.createComponent(SeasonsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
