DROP TABLE IF EXISTS contacts;
DROP SEQUENCE IF EXISTS seq1;

CREATE SEQUENCE seq1 AS INTEGER START WITH 1;

CREATE TABLE contacts
(
    id         BIGINT NOT NULL PRIMARY KEY DEFAULT nextval('seq1'),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    code_name VARCHAR(100),
    phone VARCHAR(30)
);