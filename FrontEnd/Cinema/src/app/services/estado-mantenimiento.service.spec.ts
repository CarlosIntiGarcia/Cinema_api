import { TestBed } from '@angular/core/testing';

import { EstadoMantenimientoService } from './estado-mantenimiento.service';

describe('EstadoMantenimientoService', () => {
  let service: EstadoMantenimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoMantenimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
