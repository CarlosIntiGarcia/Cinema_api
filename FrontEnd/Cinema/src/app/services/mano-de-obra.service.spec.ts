import { TestBed } from '@angular/core/testing';

import { ManoDeObraService } from './mano-de-obra.service';

describe('ManoDeObraService', () => {
  let service: ManoDeObraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManoDeObraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
