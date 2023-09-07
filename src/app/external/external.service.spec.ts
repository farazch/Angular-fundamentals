import { TestBed } from '@angular/core/testing';

import { ExternalService } from './external.service';
import {HttpTestingController,HttpClientTestingModule} from  '@angular/common/http/testing';

fdescribe('ExternalService', () => {
  let service: ExternalService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [
        HttpClientTestingModule
      ]

    });
    service = TestBed.inject(ExternalService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('external service should be created', () => {
    expect(service).toBeTruthy();
  });
});
