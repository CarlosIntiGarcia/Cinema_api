import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Persona } from 'src/app/interfaces/persona';
import { Vehiculo } from 'src/app/interfaces/vehiculo';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { PersonaService } from 'src/app/services/personas.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent implements OnInit {

  personas: Persona[] = [];
  vehiculos: Vehiculo[] = [];
  fileUp: String[] = [];

  selected = 'option2';
  form: FormGroup;
  loading = false;
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private personasService: PersonaService,
    private vehiculosService: VehiculosService
    ,
    private fileUploadService: FileUploadService
  ) {
    this.form = this.fb.group({
      idPersona: ['', Validators.required],
      placas: ['', Validators.required],
      marca: ['', Validators.required]
      ,
      file: ['', Validators.required]
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

    this.fileUpload();
    const idPersona = this.form.value.idPersona;
    const placas = this.form.value.placas;
    const marca = this.form.value.marca;
    this.vehiculosService.getAllVehiculo()
      .subscribe(vehiculos => {

        try {
          this.vehiculos = vehiculos;
          const vehiculoFind = vehiculos.filter(
            vehiculo => {
              return vehiculo.placas == placas
            })
          console.log(vehiculoFind);

          if (vehiculoFind.length == 0) {
            this.fakeLoading()
            this.vehiculosService.createVehiculo({ idPersona, placas, marca }).subscribe(
              //this.fakeLoading()
            )
          }
          else {
            // MEnsaje de error
            this.error()
            this.form.reset()
          }

        } catch (error) {
          console.log(error);
        }
      });
  }

  error() {
    this._snackBar.open('Carro Ya existente', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }




  getAllTasks() {
    this.personasService.getAllPersona()
      .subscribe(personas => {

        try {
          this.personas = personas;

          console.log(this.personas);

        } catch (error) {
          console.log(error);
        }
      });
  }

  fileUpload() {
    // e.preventDefault();
    console.log(this.form.value.file.files[0]);

    this.fileUploadService.FileUpload(this.form.value.file.files[0])
      .subscribe(file => {
        try {
          console.log(file);
        } catch (error) {
          console.log(error);
        }
      });
  }

}
