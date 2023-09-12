import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quote } from '../api-service/quote.class';
import { RandomQuoteComponent } from './random-quote.component';

describe('RandomQuoteComponent', () => {
  let component: RandomQuoteComponent;
  let fixture: ComponentFixture<RandomQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomQuoteComponent]
    });
    fixture = TestBed.createComponent(RandomQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
