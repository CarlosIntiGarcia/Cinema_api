import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoMantenimiento } from '../interfaces/estado-mantenimiento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoMantenimientoService {
  private api = 'http://localhost:8082/api'

  constructor(
    private http: HttpClient
  ) { }

  getAllEstadoMantenimiento ():Observable<EstadoMantenimiento[]>{
    const path = `${this.api}/EstadoMantenimiento`;
    return this.http.get<EstadoMantenimiento[]>(path)
  }

  deleteEstadoMantenimiento(id: number) {
    const path = `${this.api}/EstadoMantenimiento/${id}`;
    return this.http.delete(path);
  }

  createEstadoMantenimiento(estadoMantenimientos: EstadoMantenimiento) {
    const path = `${this.api}/EstadoMantenimiento`;
    return this.http.post(path, estadoMantenimientos);
  }

  updateEstadoMantenimiento(estadoMantenimientos: EstadoMantenimiento) {
    const path = `${this.api}/EstadoMantenimiento/${estadoMantenimientos.id}`;
    return this.http.put<Task>(path, estadoMantenimientos);
  }
}
