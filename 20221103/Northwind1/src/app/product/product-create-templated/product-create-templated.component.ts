import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IProduct } from '../../model/iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create-templated',
  templateUrl: './product-create-templated.component.html',
  styleUrls: ['./product-create-templated.component.css'],
})
export class ProductCreateTemplatedComponent implements OnInit {
  item: IProduct = <IProduct>{};

  constructor(private ps: ProductService, private router: Router) {}

  ngOnInit(): void {
    console.log('ProductCreateTemplatedComponent.OnInit');
  }

  onSave(productForm: NgForm) {
    console.log('ProductCreateTemplatedComponent.OnSave ...');
    console.log(productForm.form);

    this.ps.create(this.item).subscribe((product) => {
      console.log(`Created: ${JSON.stringify(productForm.value)}`);
      alert('Successfully create!');

      this.router.navigate(['/product']);
    });
  }
}
