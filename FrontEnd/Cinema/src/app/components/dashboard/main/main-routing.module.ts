import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: 'vehiculo', component: VehiculoComponent },
    { path: 'mantenimiento', component: MantenimientoComponent },
    { path: '', redirectTo: 'vehiculo', pathMatch: 'full' },
    //{ path: '**' , redirectTo: 'vehiculo', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
