import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProductRoutingModule } from './product-routing.module';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductCreatePlainComponent } from './product-create-plain/product-create-plain.component';

import { ProductService } from './product.service';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateTemplatedComponent } from './product-create-templated/product-create-templated.component';
import { ProductCreateReactiveComponent } from './product-create-reactive/product-create-reactive.component';

@NgModule({
  declarations: [
    ProductIndexComponent,
    ProductCreatePlainComponent,
    ProductEditComponent,
    ProductCreateTemplatedComponent,
    ProductCreateReactiveComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ],
  providers: [ProductService]
})
export class ProductModule { }
