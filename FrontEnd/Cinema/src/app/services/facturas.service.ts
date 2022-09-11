import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from '../interfaces/factura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private api = 'http://localhost:8082/api';

  constructor(
    private http: HttpClient
  ) { }



  getAllFactura ():Observable<Factura[]>{
    const path = `${this.api}/Factura`;
    return this.http.get<Factura[]>(path)
  }

  deleteFactura(id: number) {
    const path = `${this.api}/Factura/${id}`;
    return this.http.delete(path);
  }

  createFactura(factura: Factura) {
    const path = `${this.api}/Factura`;
    return this.http.post(path, factura);
  }

  updateFactura(factura: Factura) {
    console.log(factura);
    
    const path = `${this.api}/Factura/${factura.id}`;
    return this.http.put<Task>(path, factura);
  }
}
