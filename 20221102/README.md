# Ejercicio del día

### Pasos a seguir

1. Crear una nueva aplicación de Angular.
	* ng new Northwind1 --defaults --skip-git --skip-tests --package-manager yarn
	
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
	
4. Elimine los siguientes archivos de código fuente de la aplicación.

	* app.component.css
	* app.component.html
	* app.component.ts
	* app.module.ts

5. Crear un nuevo módulo.
	* ng g module home --routing --routing-scope Root
	
6. Crear nuevos componentes para el módulo de producto.
	* ng g component home\home-root -m home
	* ng g component home\home-index -m home
	* ng g component home\home-page-not-found -m home
	
7. Cambiar el HTML del componente home-root.component.html.<br/>
   Sustituir el HTML con el siguiente
   * ABC

8. Ejecutar la aplicación.
	* ng serve --open
	
9. Crear un nuevo módulo.
	* ng g module product --routing
	
10. Crear nuevos componentes para el módulo de producto.
	* ng g component product\product-index -m product
	* ng g component product\product-create-plain -m product
	
11. Crear la defición de dos nuevos tipo de datos.
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
	import { ICategory } from "./icategory";
	
	export interface IProduct {
	  id: number;
	  productName: string;
	  quantityPerUnit: string;
	  unitPrice: number;
	  unitsInStock: number;
	  category: ICategory;
	}
	</pre>
	
12. Exponer y consumir el componente product-index
	* Agregar el exports correspondiente en el módulo product
	* Agregar los imports correspondientes en el módulo app

13. Generar paquete de instalación
	* ng build
	* ng build --configuration=production
