
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EstadoMantenimiento } from 'src/app/interfaces/estado-mantenimiento';
import { Factura } from 'src/app/interfaces/factura';
import { ManoDeObra } from 'src/app/interfaces/mano-de-obra';
import { Mantenimiento } from 'src/app/interfaces/mantenimiento';
import { Mecanico } from 'src/app/interfaces/mecanico';
import { Persona } from 'src/app/interfaces/persona';
import { Vehiculo } from 'src/app/interfaces/vehiculo';
import { EstadoMantenimientoService } from 'src/app/services/estado-mantenimiento.service';
import { FacturaService } from 'src/app/services/facturas.service';
import { ManoDeObraService } from 'src/app/services/mano-de-obra.service';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';
import { MecanicoService } from 'src/app/services/mecanico.service';
import { PersonaService } from 'src/app/services/personas.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.scss']
})
export class MantenimientoComponent implements OnInit {

  personas: Persona[] = [];
  vehiculos: Vehiculo[] = [];
  facturas: Factura[] = [];
  mantenimientos: Mantenimiento[] = [];
  estadoMantenimientos: EstadoMantenimiento[] = [];
  manoDeObras: ManoDeObra[] = [];
  mecanicos: Mecanico[] = [];
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private personasService: PersonaService,
    private vehiculosService: VehiculosService,
    private mantenimientoService: MantenimientoService,
    private estadoMantenimientoService: EstadoMantenimientoService,
    private manoDeObraServiceService: ManoDeObraService,
    private facturaService: FacturaService,
    private mecanicoService: MecanicoService,

  ) {
    this.form = this.fb.group({
      idFactura: ['', Validators.required],
      idEstadoMantenimiento: ['', Validators.required],
      idVehiculo: ['', Validators.required],
      idManoDeObra: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      idMecanico: ['', Validators.required]
    })
  }

  ngOnInit(): void {

    try {
      this.getAllTasks();

    } catch (error) {
      console.log(error);
    }
  }

  fakeLoading() {
    // Redireccionamos al inicio
    this.loading = true;
    setTimeout(() => {

      //this.loading = false;
      this.router.navigate(['dashboard/mantenimiento'])

    }, 1400);
  }



  ingresar() {


    const idFactura = this.form.value.idFactura;
    const idEstadoMantenimiento = this.form.value.idEstadoMantenimiento;
    const idVehiculo = this.form.value.idVehiculo;
    const idManoDeObra = this.form.value.idManoDeObra;
    const descripcion = this.form.value.descripcion;
    const fecha = this.form.value.fecha;

    this.fakeLoading()
    this.mantenimientoService.createMantenimiento({ idFactura, idEstadoMantenimiento, idVehiculo, idManoDeObra, descripcion, fecha }).subscribe(
      id => {
        console.log(id);
        return id
      }

      //this.fakeLoading()
    )
  }

  error() {
    this._snackBar.open('Carro Ya existente', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }




  getAllTasks() {

    this.vehiculosService.getAllVehiculo()
      .subscribe(vehiculos => {
        try {
          this.vehiculos = vehiculos;

          console.log(this.vehiculos);

        } catch (error) {
          console.log(error);
        }
      });

    this.personasService.getAllPersona()
      .subscribe(personas => {

        try {
          this.personas = personas;

          console.log(this.personas);

        } catch (error) {
          console.log(error);
        }
      });

    this.vehiculosService.getAllVehiculo()
      .subscribe(vehiculos => {

        try {
          this.vehiculos = vehiculos;

          console.log(this.vehiculos);

        } catch (error) {
          console.log(error);
        }
      });

    this.vehiculosService.getAllVehiculo()
      .subscribe(vehiculos => {

        try {
          this.vehiculos = vehiculos;


        } catch (error) {
          console.log(error);
        }
      });

    this.estadoMantenimientoService.getAllEstadoMantenimiento()
      .subscribe(estadoMantenimiento => {

        try {
          this.estadoMantenimientos = estadoMantenimiento;


        } catch (error) {
          console.log(error);
        }
      });

    this.manoDeObraServiceService.getAllManoDeObra()
      .subscribe(manoDeObra => {

        try {
          this.manoDeObras = manoDeObra;


        } catch (error) {
          console.log(error);
        }
      });

    this.facturaService.getAllFactura()
      .subscribe(facturas => {

        try {
          this.facturas = facturas;


        } catch (error) {
          console.log(error);
        }
      });

      this.mecanicoService.getAllMecanico()
      .subscribe(mecanico => {

        try {
          this.mecanicos = mecanico;


        } catch (error) {
          console.log(error);
        }
      });



  }
}
