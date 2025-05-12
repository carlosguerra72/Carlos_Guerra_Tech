-- Crear la tabla Estudiantes
CREATE TABLE Estudiantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    edad INT,
    ciudad VARCHAR(50)
);

-- Insertar datos de ejemplo
INSERT INTO Estudiantes (nombre, edad, ciudad) VALUES
('Juan Pérez', 19, 'Bogotá'),
('María Gómez', 22, 'Medellín'),
('Carlos López', 18, 'Cali'),
('Ana Martínez', 21, 'Bogotá'),
('Pedro Díaz', 23, 'Medellín');

-- Consultar todos los registros
SELECT * FROM Estudiantes;

-- Filtrar estudiantes por ciudad
SELECT * FROM Estudiantes WHERE ciudad = 'Bogotá';

-- Consultar estudiantes mayores de 20 años
SELECT * FROM Estudiantes WHERE edad > 20;
