import { TestBed } from '@angular/core/testing';

import { NavConfigService } from './nav-config.service';

describe('NavConfigService', () => {
  let service: NavConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
