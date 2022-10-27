# Ejercicio del día

### Pasos a seguir

1. Crear una nueva aplicación de Angular
	* ng new Northwind0 --skip-git --skip-install --skip-tests
2. Agregar paquetes adicionales
	* npm install bootstrap
	* npm i bootstrap-icons
3. Restaurar los paquetes requeridos
	* yarn, o npm install
4. Modificar la configuración de la aplicación (archivo angular.json) para incluir los CSS y JS necesarios
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

5. Quitar todo el HTML del componente inicial (app.component.html).

6. Ejecutar la aplicación.
	* ng serve --open
	
8. Agregar HTML y Bootstrap inicial a la plantilla app.component.html.
	* https://raw.githubusercontent.com/curiosumcoder/angular202210/main/20221027/Northwind0/src/app/app.component.html

9. Crear la defición de un nuevo tipo de datos.
	* ng g interface model\IProduct
	
9. Crear un nuevo módulo.
	* ng g module product
	
10. Crear un nuevo servicio.
	* ng g service product\product
	
11. Crear nuevos componentes para el módulo de producto.
	* ng g component product\product-index -m product
	* ng g component product\product-list -m product
	* ng g component product\product-edit -m product

0. Generar paquete de instalación
	* ng build
	* ng build --configuration=production
