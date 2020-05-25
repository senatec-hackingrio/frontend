import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://localhost:8080/';
  httpOptions = {  headers: new HttpHeaders({ 'Content-Type': 'application/json' } )  };


  novoUsuario(usuarioFormCadastro: any): Observable<any> {

    const url = this.baseUrl + 'usuario';
    const data = JSON.stringify(usuarioFormCadastro);

    return this.httpClient.post<any>(url, data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


  login(usuario: any) {

    const url = this.baseUrl + 'login';
    const data = JSON.stringify(usuario);

    return this.httpClient.post<any>(url, data, this.httpOptions)
        .pipe(map(user => {
          sessionStorage.setItem('userSession', JSON.stringify(user));
          return user;
        }));
  }




  handleError(error: HttpErrorResponse) {

    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Codigo do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }

    return throwError(errorMessage);
  }



}
