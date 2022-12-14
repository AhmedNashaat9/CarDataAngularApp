import { TestBed } from '@angular/core/testing';

import { PlatedataService } from './platedata.service';

describe('PlatedataService', () => {
  let service: PlatedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
