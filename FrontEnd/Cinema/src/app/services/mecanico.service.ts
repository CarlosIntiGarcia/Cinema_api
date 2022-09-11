import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mecanico } from '../interfaces/mecanico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {
  private api = 'http://localhost:8082/api'

  constructor(
    private http: HttpClient
  ) { }

  getAllMecanico ():Observable<Mecanico[]>{
    const path = `${this.api}/Mecanico`;
    return this.http.get<Mecanico[]>(path)
  }

  deleteMecanico(id: number) {
    const path = `${this.api}/Mecanico/${id}`;
    return this.http.delete(path);
  }

  createMecanico(mecanicos: Mecanico) {
    const path = `${this.api}/Mecanico`;
    return this.http.post(path, mecanicos);
  }

  updateMecanico(mecanicos: Mecanico) {
    const path = `${this.api}/Mecanico/${mecanicos.id}`;
    return this.http.put<Task>(path, mecanicos);
  }
}
