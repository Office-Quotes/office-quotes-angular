import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomQuoteComponent } from './random-quote.component';
import { OfficeApiService } from '../api-service/office-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';

describe('RandomQuoteComponent', () => {
  let component: RandomQuoteComponent;
  let fixture: ComponentFixture<RandomQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatCardModule],
      declarations: [RandomQuoteComponent],
      providers: [OfficeApiService],
    });
    fixture = TestBed.createComponent(RandomQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
