import { TestBed } from '@angular/core/testing';

import { NewemployeeService } from './newemployee.service';

describe('NewemployeeService', () => {
  let service: NewemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
