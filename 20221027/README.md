# Ejercicio del día

### Pasos a seguir
ng new ademo3 --skip-git --skip-install --skip-tests
yarn
- quitar el html del componente inicial
- agregar bootstrap
	npm install bootstrap
	npm i bootstrap-icons
		...
		"styles": [
		  "src/styles.css",
		  "node_modules/bootstrap/dist/css/bootstrap.min.css",
		  "node_modules/bootstrap-icons/font/bootstrap-icons.css"
		],
		"scripts": ["node_modules/bootstrap/dist/js/bootstrap.min.js"]
- módulo
	ng g interface model\IProduct
	ng g module product
	ng g service product\product
	ng g component product\product-index -m product
	ng g component product\product-list -m product