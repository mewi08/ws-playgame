CREATE DATABASE playgame;

USE playgame;

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

INSERT INTO videojuegos(titulo, genero, desarrollador, fecha_lanz, precio, descripcion)
VALUES
('Minecraft','Aventura','Mojang Studios','2011-11-18',30,'Videojuego de construcción y exploración'),
('Roblox','Aventura','Roblox Corporation','2006-09-01',0,'Plataforma de juegos y experiencias creadas por usuarios'),
('Plants vs. Zombies','Estrategia','PopCap Games','2009-05-05',0,'Videojuego de estrategia donde se defienden plantas contra zombis'),
('Five Nights at Freddy''s','Terror','Scott Cawthon','2014-08-08',9.99,'Videojuego de terror y supervivencia en el que el jugador debe sobrevivir durante la noche en una pizzería');

SELECT * FROM videojuegos;