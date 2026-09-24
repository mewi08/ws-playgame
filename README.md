# WebService
Está aplicación, utiliza NodeJS como entorno de desarrollo para acceder y gestionas los datos desde MySQL y servirlos a través de un API REST en formato JSON.

### Requerimientos
- NodeJS
- MySQL

### Base de datos
Restaure la BD, tabla y registros desde el archivo **db.sql**.

### Despliegue
1. Clone el repositorio: 
```shell
  git clone https://github.com/usuario/mi-proyecto.git
```

2. Restaure node_modules:
```shell
npm install
```

3. Configure las variables de entorno:
```shell
copy .env.example .env
```

4. Ejecute el servidor local:
```shell
npm run dev
```

### API Rutas
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/videojuegos` | Lista los videojuegos |
| DELETE | `/videojuegos/:id` | Elimina un videojuego |


### Tabla 

```mysql

CREATE TABLE videojuegos(
id				INT AUTO_INCREMENT PRIMARY KEY,
titulo			VARCHAR(100) NOT NULL,
genero 			VARCHAR(50) NOT NULL,
desarrollador	VARCHAR(100) NOT NULL,
fecha_lanz		DATE NOt NULL, 
precio 			DECIMAL(6,2) NOT NULL DEFAULT 0,
descripcion		TEXT NOT NULL,
create_at		DATETIME NOT NULL DEFAULT NOW(),
update_at		DATETIME NULL
)ENGINE = InnoDB;

```

### Créditos
_Desarrollado por: **Melanie Tello**_