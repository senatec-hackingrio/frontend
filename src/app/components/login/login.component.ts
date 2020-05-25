import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsuarioService } from '../../shared/service/usuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {

    this.formGroup = this.formBuilder.group({
      login: '',
      senha: ''
    });

   }

  ngOnInit() {
  }

  onSubmit(formData) {
    console.log('Login');
    this.usuarioService.login(formData)
      .pipe()
      .subscribe(
          data => { this.router.navigate(['./home-paciente']); },
          err => { alert('Erro ao realizar o login'); }
    );

  }


}
