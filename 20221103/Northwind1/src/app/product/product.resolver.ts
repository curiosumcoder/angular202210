import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { ProductService } from './product.service';
import { IProduct } from '../model/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<IProduct> {
  constructor(private productService: ProductService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IProduct> {
    let id = +route.params['id'];

    console.log('ProductResolver.resolving ...');

    return this.productService.get(id);
  }
}
