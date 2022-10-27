import { Component, OnInit, Input } from '@angular/core';
import { IProduct  } from "../../model/iproduct";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Input() item?: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
