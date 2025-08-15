import { TestBed } from '@angular/core/testing';

import { RestroListService } from './restro-list.service';

describe('RestroListService', () => {
  let service: RestroListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestroListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
