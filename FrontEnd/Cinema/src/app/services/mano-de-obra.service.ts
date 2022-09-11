import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ManoDeObra } from '../interfaces/mano-de-obra';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManoDeObraService {
  private api = 'http://localhost:8082/api'

  constructor(
    private http: HttpClient
  ) { }

  getAllManoDeObra ():Observable<ManoDeObra[]>{
    const path = `${this.api}/ManoDeObra`;
    return this.http.get<ManoDeObra[]>(path)
  }

  deleteManoDeObra(id: number) {
    const path = `${this.api}/ManoDeObra/${id}`;
    return this.http.delete(path);
  }

  createManoDeObra(manoDeObras: ManoDeObra) {
    const path = `${this.api}/ManoDeObra`;
    return this.http.post(path, manoDeObras);
  }

  updateManoDeObra(manoDeObras: ManoDeObra) {
    const path = `${this.api}/ManoDeObra/${manoDeObras.id}`;
    return this.http.put<Task>(path, manoDeObras);
  }
}
