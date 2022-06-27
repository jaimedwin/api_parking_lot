# api_parking_lot
Prueba Técnica  (back-end)

Por: Jaime Edwin Arciniegas Garcia

Correo: jaimedwin @ gmail.com

<hr>

## Construir contenedor y probar la imagen:
Correr el comando en el directorio raiz del proyecto. './'

```
docker build -t api_parking_lot .
docker run -it -p 8000:4000 api_parking_lot
```

## Crear la base de datos, las tablas y cargar los seeder ORM Sequelize: 

```
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
Nota1: El comando se ejuta en la carpeta ./src 

Nota2: la migración genera la base de datos, las tablas, las  relaciones entre tablas y semillas para la tabla vehiculo y types.

## Ejecutar la aplicación

modo desarrollo:
```
npm run dev
```

modo producción:
```
npm run start
```
## End point

| Verbo HTTP y URI | Descripción  |
| :---:   | :-: |
| GET /api/v1/type/ | Retorna todos los registros de la tabla types |
| GET /api/v1/type/:id | Retorna el type usando el id |
| POST /api/v1/type/ | Recibe un type para crear |
| PUT /api/v1/type/:id | Recibe id por url y json con los valores a actualizar |
| DELETE /api/v1/type/:id | Borra un registro con base en el id |
| GET /api/v1/register/ | Retorna todos los registros de la tabla register |
| GET /api/v1/register/:id | Retorna el register usando el id |
| POST /api/v1/register/ | Recibe un register para crear |
| PUT /api/v1/register/:id | Recibe id por url y json con los valores a actualizar |
| DELETE /api/v1/register/:id | Borra un registro con base en el id |
| POST /entry-vehicle-record/ | Primer caso de uso |
| PUT /exit-vehicle-record/ | Segundo caso de uso |
| POST /register-official-vehicle | Tercer caso de uso |
| POST /register-resident-vehicle/ | Cuarto caso de uso |
| GET /start-month/ | Quinto caso de uso |
| GET /resident-payments/ | Sexto caso de uso |

Nota: Todas las uri retornan formato JSON y reciben JSON en los verbos POST y PUT menos la uri de descarga.

## Primeros test
Se desarrolladó usando simple rest, los archivos se encuentra en la ruta src/requests/*



