import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CustomerSupplier } from '../class/supplier_customer';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpResponseWS } from '../class/htt_response_ws';
import { AppSettings } from '../class/app_settings';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class SupplierService {

    constructor(private http: HttpClient) {
    }
    
     /** GET: fetch list of supplier from database */
    getSupplierAll(isCustomer:string):Observable<CustomerSupplier[]>{
        return this.http.get<CustomerSupplier[]>(AppSettings.get_customer_supplier_path+"isc="+isCustomer);
    }

     /** GET: supplier based on id from database */
     getSupplierById(id:number):Observable<CustomerSupplier>{
        return this.http.get<CustomerSupplier>(AppSettings.get_customer_supplier_byid+"id="+id);
     }

     /** PUT:  modify supplier from database*/
     updateSupplier(suppCust:CustomerSupplier):Observable<HttpResponseWS>{
        return this.http.put<HttpResponseWS>(AppSettings.update_customer_supplier_path,suppCust);
     }

    /** POST: add a new supplier to the database */
    addSupplier(suppCust: CustomerSupplier): Observable<HttpResponseWS> {
        return this.http.post<HttpResponseWS>(AppSettings.create_customer_supplier_path, suppCust);
            // .pipe(
            //     catchError(this.handleError('addHero', suppCust))
            // );
    }

    /** DELETE: delete supplier from database */
    deleteSupplierById(id:number):Observable<HttpResponseWS>{
        return this.http.delete<HttpResponseWS>(AppSettings.delete_customer_supplier_byid+"id="+id);
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