import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { IProduct } from '../../model/iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css'],
})
export class ProductIndexComponent implements OnInit {
  products?: Observable<IProduct[]>;

  private searchTerms = new Subject<string>();

  constructor(private router: Router,private ps: ProductService) {}

  ngOnInit(): void {
    this.products = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => (term ? this.ps.search(term) : of<IProduct[]>([])))
    );
  }

  productTrackBy(index: number, p: IProduct) {
    console.log(p.id);
    return p.id;
  }

  search(term: string): void {
    console.log(`Searching: ${term} ....`);
    this.searchTerms.next(term);
  }

  onCreate() {
    console.log('onCreate');
    this.router.navigate(['/product/create']);  // Plain
    //this.router.navigate(['/product/create/templated']);
    //this.router.navigate(['/product/create/reactive']);
  }

  onDelete(id: number): void {
    console.log(`onDelete: ${id}`);

    if (confirm('¿Está seguro?')) {
      this.ps.delete(id).subscribe(() => {
        alert('Successfully deleted!');
      });
    }
  }
}
