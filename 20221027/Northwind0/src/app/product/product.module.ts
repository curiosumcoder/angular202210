import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';



@NgModule({
  declarations: [
    ProductIndexComponent,
    ProductListComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductIndexComponent
  ]
})
export class ProductModule { }
