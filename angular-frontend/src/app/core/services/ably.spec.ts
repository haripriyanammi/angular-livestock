import { TestBed } from '@angular/core/testing';

import { Ably } from './ably';

describe('Ably', () => {
  let service: Ably;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ably);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
