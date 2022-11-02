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
	"scripts": ["node_modules/bootstrap/dist/js/bootstrap.min.js"]
	</pre>

	* https://getbootstrap.com/
	* https://icons.getbootstrap.com/

5. Quitar la mayor parte del HTML del componente inicial (app.component.html).
   Dejando únicamente la etiqueta: <router-outlet></router-outlet>

6. Ejecutar la aplicación.
	* ng serve --open
	
8. Agregar HTML y Bootstrap inicial a la plantilla app.component.html.
	* https://raw.githubusercontent.com/curiosumcoder/angular202210/main/20221027/Northwind0/src/app/app.component.html

9. Crear la defición de un nuevo tipo de datos.
	* ng g interface model\IProduct
	<pre>
	export interface IProduct {
	  id: number;
	  productName: string;
	  quantityPerUnit: string;
	  unitPrice: number;
	  unitsInStock: number;
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