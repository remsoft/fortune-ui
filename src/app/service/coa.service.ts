import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpResponseWS } from '../class/htt_response_ws';
import { AppSettings } from '../class/app_settings';
import { Coa } from '../class/coa';


@Injectable({
  providedIn: 'root'
})
export class CoaService {

  constructor(private http: HttpClient) {
  }
   /** GET: fetch list of supplier from database */
  getCoaAll():Observable<Coa[]>{
      return this.http.get<Coa[]>(AppSettings.get_coa_path);
  }
 
}
