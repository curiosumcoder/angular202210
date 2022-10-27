import { Component, OnInit } from '@angular/core';
import { ProductService  } from "../product.service";
import { IProduct  } from "../../model/iproduct";

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css'],
  providers : [ProductService]
})
export class ProductIndexComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
  }

  search(term:string)
  {
    console.log(`Searching ${term} ...`);
    this.ps.search(term).subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }
}
