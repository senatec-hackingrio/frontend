import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeMedicoComponent } from './components/area-logada/home-medico/home-medico.component';
import { HomePacienteComponent } from './components/area-logada/home-paciente/home-paciente.component';
import { ChatComponent } from './components/area-logada/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    CadastroComponent,
    HomeMedicoComponent,
    HomePacienteComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
