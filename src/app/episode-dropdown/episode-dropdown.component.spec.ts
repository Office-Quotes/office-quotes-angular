import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeDropdownComponent } from './episode-dropdown.component';

describe('EpisodeDropdownComponent', () => {
  let component: EpisodeDropdownComponent;
  let fixture: ComponentFixture<EpisodeDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodeDropdownComponent]
    });
    fixture = TestBed.createComponent(EpisodeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
