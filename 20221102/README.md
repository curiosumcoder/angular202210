# Ejercicio del día

### Pasos a seguir

1. Crear una nueva aplicación de Angular.
	* ng new Northwind1 --skip-git --skip-tests --package-manager yarn
	* Cuando se solicite si se desea agregar Routing decir que sí.
2. Agregar paquetes adicionales a la aplicación de Angular recien creada.
	* npm i bootstrap, o yarn add bootstrap
	* npm i bootstrap-icons, o yarn add bootstrap-icons
3. Modificar la configuración de la aplicación (archivo angular.json) para incluir los CSS y JS necesarios
<br/>
	<pre>"styles": [
	  "src/styles.css",
	  "node_modules/bootstrap/dist/css/bootstrap.min.css",
	  "node_modules/bootstrap-icons/font/bootstrap-icons.css"
	],
    "scripts": ["node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"]
	</pre>

	* https://getbootstrap.com/
	* https://icons.getbootstrap.com/

5. Quitar la mayor parte del HTML del componente inicial (app.component.html).<br/>
   Dejando únicamente la etiqueta: `<router-outlet></router-outlet>`

6. Ejecutar la aplicación.
	* ng serve --open
	
8. Agregar HTML y Bootstrap inicial a la plantilla app.component.html.<br/>
   Usar el siguiente código de HTML.
   
   `<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><i class="bi bi-house-door-fill"></i></a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Index</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Create 1</a></li>
            <li><a class="dropdown-item" href="#">Create 2</a></li>
            <li><a class="dropdown-item" href="#">Create 3</a></li>
            <li><a class="dropdown-item" href="#">Create 4</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<main class="container">

  <router-outlet></router-outlet>

</main>`


9. Crear la defición de dos nuevos tipo de datos.
	* ng g interface model\ICategory
	<pre>
	export interface ICategory {
		categoryID: number;
		categoryName: string;
		description: string;
	}
	</pre>

	* ng g interface model\IProduct
	<pre>
	export interface IProduct {
	  id: number;
	  productName: string;
	  quantityPerUnit: string;
	  unitPrice: number;
	  unitsInStock: number;
	  category: ICategory;
	}
	</pre>
	
9. Crear un nuevo módulo.
	* ng g module product
	
10. Crear un nuevo servicio.
	* ng g service product\product
	
11. Crear nuevos componentes para el módulo de producto.
	* ng g component product\product-index -m product
	* ng g component product\product-list -m product
	* ng g component product\product-edit -m product
12. Exponer y consumir el componente product-index
	* Agregar el exports correspondiente en el módulo product
	* Agregar los imports correspondientes en el módulo app

14. Generar paquete de instalación
	* ng build
	* ng build --configuration=production
