# Ejercicio del día

### Pasos a seguir

1. Crear una nueva aplicación de Angular
	* ng new Northwind0 --skip-git --skip-install --skip-tests
2. Agregar paquetes adicionales
	* npm install bootstrap
	* npm i bootstrap-icons
3. Restaurar los paquetes requeridos
	* yarn, o npm install
4. Modificar la configuración de la aplicación para incluir los CSS y JS necesarios
	*"styles": [
	  "src/styles.css",
	  "node_modules/bootstrap/dist/css/bootstrap.min.css",
	  "node_modules/bootstrap-icons/font/bootstrap-icons.css"
	],
	"scripts": ["node_modules/bootstrap/dist/js/bootstrap.min.js"]

- quitar el html del componente inicial
- agregar bootstrap
	
		...

- módulo
	ng g interface model\IProduct
	ng g module product
	ng g service product\product
	ng g component product\product-index -m product
	ng g component product\product-list -m product
