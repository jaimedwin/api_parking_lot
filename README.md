# api_parking_lot
Prueba Técnica  (back-end)

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



npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

