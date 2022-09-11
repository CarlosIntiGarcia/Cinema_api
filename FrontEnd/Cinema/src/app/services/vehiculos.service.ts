import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../interfaces/vehiculo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  private api = 'http://localhost:8082/api';

  constructor(
    private http: HttpClient
  ) { }


  getAllVehiculo ():Observable<Vehiculo[]>{
    const path = `${this.api}/Vehiculo`;
    return this.http.get<Vehiculo[]>(path)
  }

  deleteVehiculo(id: number) {
    const path = `${this.api}/Vehiculo/${id}`;
    return this.http.delete(path);
  }

  createVehiculo(vehiculo: Vehiculo) {
    const path = `${this.api}/Vehiculo`;
    return this.http.post(path, vehiculo);
  }

  updateVehiculo(vehiculo: Vehiculo) {
    console.log(vehiculo);
    
    const path = `${this.api}/Vehiculo/${vehiculo.id}`;
    return this.http.put<Task>(path, vehiculo);
  }

}
