import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

xdescribe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('test service should be created', () => {
    expect(service).toBeTruthy();
  });
});
