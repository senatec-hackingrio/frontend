import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../shared/service/usuario.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
    ) {

    this.formGroup = this.formBuilder.group({
      nomeCompleto: '',
      cpf: '',
      senhaAcesso: '',
      email: '',
      telefone: '',
      endereco: '',
      complemento: '',
      cep: ''
    });

   }

  ngOnInit() {
  }

  onSubmit(formData) {

    this.usuarioService.novoUsuario(formData)
    .pipe()
    .subscribe(
      res => {
        // if (res.status === 201) {
          this.router.navigate(['/login']);
        // }
      }
    );
  }

}
