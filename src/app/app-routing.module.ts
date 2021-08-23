import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEstudianteComponent } from './crear-estudiante/crear-estudiante.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path:'', redirectTo: 'list-estudiantes', pathMatch: 'full'},
  {path: 'list-estudiantes', component: PrincipalComponent},
  {path: 'crear-estudiante', component: CrearEstudianteComponent},
  {path: 'edit-estudiante/:id', component: CrearEstudianteComponent},
  {path:'', redirectTo: 'list-estudiantes', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
