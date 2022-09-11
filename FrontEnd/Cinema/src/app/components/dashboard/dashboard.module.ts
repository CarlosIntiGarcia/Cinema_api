import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { MenuResponsiveComponent } from './navbar/menu-responsive/menu-responsive.component';
import { VehiculoComponent } from './main/vehiculo/vehiculo.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    UsersComponent,
    ReportsComponent,
    NavbarComponent,
    CreateUserComponent,
    MenuResponsiveComponent,
    VehiculoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
