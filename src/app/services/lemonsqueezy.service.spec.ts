import { TestBed } from '@angular/core/testing';

import { LemonsqueezyService } from './lemonsqueezy.service';

describe('LemonsqueezyService', () => {
  let service: LemonsqueezyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LemonsqueezyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
