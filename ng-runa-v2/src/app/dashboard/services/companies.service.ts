import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company';
import { catchError, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  private url: string =
    ' https://runainstancia.azurewebsites.net/requerimiento';

  constructor(private httpClient: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.httpClient
      .get<Company[]>(this.url)
      .pipe(catchError((error) => of([])));
  }
}
