import { TestBed } from '@angular/core/testing';

import { SymptomsformService } from './symptomsform.service';

describe('SymptomsformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SymptomsformService = TestBed.get(SymptomsformService);
    expect(service).toBeTruthy();
  });
});
