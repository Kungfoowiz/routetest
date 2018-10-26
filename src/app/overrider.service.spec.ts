import { TestBed } from '@angular/core/testing';

import { OverriderService } from './overrider.service';

describe('OverriderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OverriderService = TestBed.get(OverriderService);
    expect(service).toBeTruthy();
  });
});
