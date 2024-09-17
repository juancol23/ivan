import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company';
import {catchError, Observable, of, throwError} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  private url: string =
    ' https://runainstancia.azurewebsites.net/requerimiento';

  constructor(private httpClient: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.httpClient
      .get<Company[]>(this.url)
      .pipe(catchError(() => of([])));
  }

  createRequerimiento(data: Company): Observable<Company>{
    return this.httpClient
      .post<Company>(this.url, data)
      .pipe(catchError(() =>throwError(()=>new Error('Error al guardar el requerimiento.'))));
  }
}
