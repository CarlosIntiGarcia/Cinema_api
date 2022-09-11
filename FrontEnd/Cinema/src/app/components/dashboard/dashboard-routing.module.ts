import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
//import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { CreateUserComponent } from './users/create-user/create-user.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', loadChildren: () => import('./main/main.module').then(x => x.MainModule) },
    { path: 'users', component: UsersComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'create-user', component: CreateUserComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
