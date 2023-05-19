import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Banda } from './banda';

@Injectable({
  providedIn: 'root'
})
export class BandaService {
  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getBandas(): Observable<Banda[]> {
  return this.http.get<Banda[]>(this.apiUrl);
}
getAntiguo(series: Array<Banda>): Banda{
  let antiguo: Banda | undefined;
  let menor = 0;

  series.forEach((banda) => {
    if (2023 - banda.foundation_year >= menor) {
      antiguo = banda;
      menor = 2023 - banda.foundation_year;
    }
  });

  if (!antiguo) {
    throw new Error("No se encontró ninguna banda en la serie.");
  }

  return antiguo;
}

getAno(series: Array<Banda>): number{
  let antiguo: Banda | undefined;
  let menor = 0;

  series.forEach((banda) => {
    if (2023 - banda.foundation_year >= menor) {
      antiguo = banda;
      menor = 2022 - banda.foundation_year;
    }
  });

  if (!antiguo) {
    throw new Error("No se encontró ninguna banda en la serie.");
  }

  return menor;
}
}
