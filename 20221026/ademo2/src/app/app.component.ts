import { Component } from '@angular/core';
import { never } from 'rxjs';

// <app-root></app-root>
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  productoNombre : string = 'ABC';
  productos : string[] = [];

  agregar()
  {
    this.productos.push(this.productoNombre);

    console.log(this.productos);
  }
}
