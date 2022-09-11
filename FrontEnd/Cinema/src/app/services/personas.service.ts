import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private api = 'http://localhost:8082/api';

  constructor(
    private http: HttpClient
  ) { }


  getAllPersona ():Observable<Persona[]>{
    const path = `${this.api}/Persona`;
    return this.http.get<Persona[]>(path)
  }

  deletePersona(id: number) {
    const path = `${this.api}/Persona/${id}`;
    return this.http.delete(path);
  }

  createPersona(personas: Persona) {
    const path = `${this.api}/Persona`;
    return this.http.post(path, personas);
  }

  updatePersona(personas: Persona) {
    const path = `${this.api}/Persona/${personas.id}`;
    return this.http.put<Task>(path, personas);
  }
}
