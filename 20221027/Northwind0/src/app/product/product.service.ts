import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct  } from "../model/iproduct";

@Injectable()
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  search(term: string): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(`${this.apiUrl}/?productName_like=${term}`);
  }
}
