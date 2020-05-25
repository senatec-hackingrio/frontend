import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class SaudeService {

  baseUrl = 'http://localhost:8080/';
  httpOptions = {  headers: new HttpHeaders({ 'Content-Type': 'application/json' } )  };

  constructor(private httpClient: HttpClient) { }

  novoRegistro(novoRegistroSaude: any): Observable<any> {

    const url = this.baseUrl + 'saude';
    const data = JSON.stringify(novoRegistroSaude);

    return this.httpClient.post<any>(url, data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  recuperaTodosRegistros() {

    const url = this.baseUrl + 'saude';
    const token = JSON.parse(sessionStorage.getItem('userSession')).token;

    this.httpOptions.headers =
      this.httpOptions.headers.set('Authorization', token.tipo + ' ' + token.tokenId);

    return this.httpClient.get<any[]>(url, this.httpOptions);

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
