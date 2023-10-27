import { TestBed } from '@angular/core/testing';

import { AlankarService } from './alankar.service';

describe('AlankarService', () => {
  let service: AlankarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlankarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
