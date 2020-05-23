DROP TABLE IF EXISTS usuario;

CREATE TABLE usuario(
    userID serial PRIMARY KEY,
    name VARCHAR (50) NOT NULL,
    lastname VARCHAR (50) NOT NULL,
    age INTEGER NOT NULL,
    email VARCHAR (80) NOT NULL,
    password VARCHAR (50) NOT NULL
);
 
INSERT INTO usuario (name, lastname, age, email, password) VALUES
    ('Diego', 'Gomez', 42, 'jeje@prueba.com', '1234');

