import { TestBed } from '@angular/core/testing';

import { SymptomsFormService } from './symptoms-form.service';

describe('SymptomsFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SymptomsFormService = TestBed.get(SymptomsFormService);
    expect(service).toBeTruthy();
  });
});
