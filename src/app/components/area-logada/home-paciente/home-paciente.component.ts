

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SaudeService } from './../../../shared/service/saude.service';
import {Router} from '@angular/router';

import { Saude } from './../../../shared/model/saude-response-model';

@Component({
  selector: 'app-home-paciente',
  templateUrl: './home-paciente.component.html',
  styleUrls: ['./home-paciente.component.css']
})
export class HomePacienteComponent implements OnInit {

  nome: string;
  latitude: any;
  longitude: any;

  Saudes: Saude[] = [];

  formGroup;


  constructor(
    private formBuilder: FormBuilder,
    private saudeService: SaudeService,
    ) {
      this.formGroup = this.formBuilder.group({
        pressaoArterial: '',
        frequenciaCardiaca: '',
        frequenciaRespitoria: '',
      });
    }

  ngOnInit() {

    const nomeCompleto = JSON.parse(sessionStorage.getItem('userSession')).usuario.nome ;
    this.nome = nomeCompleto.split(' ')[0];

    this.recuperaTodosRegistrs();

  }


  async changeTab(event) {
    if (event.nextId === 2) {
      this.openMap();
    }
}


  openMap() {
    navigator.geolocation.getCurrentPosition(pos => {
      const parameter = pos.coords.latitude + ',' + pos.coords.longitude;
      const xx = 'https://app.powerbi.com/view?r=eyJrIjoiYjlhMDBlY2MtZmU3Yy00N2M2LTljNGEtYjk2N2JmOGJlOWY4IiwidCI6IjE2YzFkZTc5LWEyNjUtNDJjZS05OGMyLTk1NGFlYzNhZjY1MSJ9';
      // window.open('https://www.google.com/maps/search/?api=1&query=' + parameter);
      window.open(xx);
    });
  }



  onSubmit(formData) {

    this.saudeService.novoRegistro(formData)
      .pipe()
      .subscribe();

    alert('Cadastrado com sucesso');
    this.formGroup.reset();
    this.recuperaTodosRegistrs();

  }

  recuperaTodosRegistrs() {
    this.saudeService.recuperaTodosRegistros()
      .subscribe( saude => this.Saudes = saude);
  }


}



