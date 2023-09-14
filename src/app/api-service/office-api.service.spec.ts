import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { OfficeApiService } from './office-api.service';

describe('OfficeApiService', () => {
  let service: OfficeApiService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ OfficeApiService ]
    });
    service = TestBed.inject(OfficeApiService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
