import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductCreatePlainComponent } from './product-create-plain/product-create-plain.component';
import { ProductCreateTemplatedComponent } from './product-create-templated/product-create-templated.component';
import { ProductCreateReactiveComponent } from './product-create-reactive/product-create-reactive.component';

const routes: Routes = [
  {
    path: 'product',
    children: [
      { path: '', component: ProductIndexComponent },
      { path: 'create', component: ProductCreatePlainComponent },
      { path: 'templated', component: ProductCreateTemplatedComponent },
      { path: 'reactive', component: ProductCreateReactiveComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
