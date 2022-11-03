import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductCreatePlainComponent } from './product-create-plain/product-create-plain.component';
import { ProductCreateTemplatedComponent } from './product-create-templated/product-create-templated.component';
import { ProductCreateReactiveComponent } from './product-create-reactive/product-create-reactive.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductResolver } from './product.resolver';

const routes: Routes = [
  {
    path: 'product',
    children: [
      { path: '', component: ProductIndexComponent },
      { path: 'create', component: ProductCreatePlainComponent },
      { path: 'templated', component: ProductCreateTemplatedComponent },
      { path: 'reactive', component: ProductCreateReactiveComponent },
      { path: ':id/edit', resolve: { product: ProductResolver }, component: ProductEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
