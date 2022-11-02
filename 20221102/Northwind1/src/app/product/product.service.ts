import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

import { IProduct } from "../model/iproduct";
import { environment } from '../../environments/environment';

@Injectable()
export class ProductService {
  private apiUrl = `${environment.apiRootUrl}products`;
  private headers = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}

  search(term: string): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(`${this.apiUrl}/?productName_like=${term}`)
      .pipe(
        tap(data =>
          console.log(`GET : ${this.apiUrl} - ${JSON.stringify(data.length)}`)
        ),
        catchError(this.handleError)
      );
  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl).pipe(
      tap(data =>
        console.log(`GET : ${this.apiUrl} - ${JSON.stringify(data.length)}`)
      ),
      catchError(this.handleError)
    );
  }

  get(id: number): Observable<IProduct> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IProduct>(url).pipe(
      tap(data => console.log(`get: ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>(this.apiUrl, JSON.stringify(product), {
        headers: this.headers
      })
      .pipe(
        tap(data => console.log(`"create: ${JSON.stringify(data)}`)),
        catchError(this.handleError)
      );
  }

  update(product: IProduct): Observable<IProduct> {
    console.log(product);
    const url = `${this.apiUrl}/${product.id}`;
    return this.http
      .put<IProduct>(url, JSON.stringify(product), { headers: this.headers })
      .pipe(
        tap(data => console.log(`update: ${JSON.stringify(data)}`)),
        catchError(this.handleError)
      );
  }

  delete(id: number): Observable<object> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(
        tap(data => console.log(`delete: ${JSON.stringify(data)}`)),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    //console.error(err.message);
    //console.log(`STATUS: ${err.statusText}`);
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
