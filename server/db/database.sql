CREATE DATABASE code_editor;

CREATE TABLE code(
    id BIGSERIAL PRIMARY KEY,
    userId INT NOT NULL,
    projectId INT NOT NULL,
    lang VARCHAR(100) NOT NULL,
    code TEXT,
    lastUpdated TIMESTAMP,
    date TIMESTAMP
);

CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(300) NOT NULL,
    date TIMESTAMP
)