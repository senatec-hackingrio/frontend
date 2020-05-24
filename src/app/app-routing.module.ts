import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './components/login/login.component';
import { HomePacienteComponent } from './components/area-logada/home-paciente/home-paciente.component';
import { HomeMedicoComponent } from './components/area-logada/home-medico/home-medico.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';



const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'home-medico', component: HomeMedicoComponent},
  {path: 'home-paciente', component: HomePacienteComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
