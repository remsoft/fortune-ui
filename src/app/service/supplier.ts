import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CustomerSupplier } from '../class/supplier_customer';
import { CustomerSupplierInterface } from '../interface/supplier_customer';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class SupplierService {
    fotuna_ws_ip = "http://localhost:8080/";
    fortuna_ws_supplier_url = this.fotuna_ws_ip + "createcustsup";

    constructor(private http: HttpClient) {
    }


    /** POST: add a new supplier to the database */
    addSupplier(suppCust: CustomerSupplier): Observable<CustomerSupplier> {
        return this.http.post<CustomerSupplier>(this.fortuna_ws_supplier_url, suppCust);
            // .pipe(
            //     catchError(this.handleError('addHero', suppCust))
            // );
    }


    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };
}