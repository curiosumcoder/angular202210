import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { IProduct  } from "../../model/iproduct";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() items: IProduct[] = [];
  @Output() selected = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(p: IProduct): void {
    console.log(p);
    this.selected.emit(p);
  }
}
