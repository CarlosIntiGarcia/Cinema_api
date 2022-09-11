import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mantenimiento } from '../interfaces/mantenimiento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {
  private api = 'http://localhost:8082/api'

  constructor(
    private http: HttpClient
  ) { }

  getAllMantenimiento ():Observable<Mantenimiento[]>{
    const path = `${this.api}/Mantenimiento`;
    return this.http.get<Mantenimiento[]>(path)
  }

  deleteMantenimiento(id: number) {
    const path = `${this.api}/Mantenimiento/${id}`;
    return this.http.delete(path);
  }

  createMantenimiento(mantenimientos: Mantenimiento) {
    const path = `${this.api}/Mantenimiento`;
    return this.http.post(path, mantenimientos);
  }

  updateMantenimiento(mantenimientos: Mantenimiento) {
    const path = `${this.api}/Mantenimiento/${mantenimientos.id}`;
    return this.http.put<Task>(path, mantenimientos);
  }
}
