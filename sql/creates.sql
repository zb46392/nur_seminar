CREATE DATABASE student_cv 
    CHARACTER SET = 'utf8'
    COLLATE = 'utf8_croatian_ci';

CREATE USER student@localhost IDENTIFIED BY 'test';

GRANT SELECT, INSERT, UPDATE, DELETE ON student_cv.* 
    TO 'student'@'localhost'
    IDENTIFIED BY 'test';

CREATE TABLE drzave(
    id              INT NOT NULL AUTO_INCREMENT,
    ime             VARCHAR(30) NOT NULL,
    drzavljanstvo   VARCHAR(30) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE gradovi(
    postanski_broj  INT NOT NULL,
    ime             VARCHAR(30) NOT NULL,
    drzava_id_fk    INT NOT NULL,

    PRIMARY KEY (postanski_broj, drzava_id_fk),
    FOREIGN KEY (drzava_id_fk) REFERENCES drzave(id)
);

CREATE TABLE adrese(
    id          INT NOT NULL AUTO_INCREMENT,
    ulica       VARCHAR(45),
    broj        INT,
    grad_fk     INT,
    drzava_fk   INT,

    PRIMARY KEY (id),
    FOREIGN KEY (grad_fk, drzava_fk) REFERENCES gradovi(postanski_broj, drzava_id_fk)
);

CREATE TABLE studenti(
    maticni_broj    INT NOT NULL,
    ime             VARCHAR(30) NOT NULL,
    prezime         VARCHAR(30) NOT NULL,
    telefon         VARCHAR(30),
    email           VARCHAR(45),
    rojendan        DATE,
    adresa_fk       INT,

    PRIMARY KEY (maticni_broj),
    FOREIGN KEY (adresa_fk) REFERENCES adrese(id)
);

CREATE TABLE studenti_drzavljanstva(
    mb_studenta_fk  INT NOT NULL,
    id_drzave_fk    INT NOT NULL,

    PRIMARY KEY (mb_studenta_fk, id_drzave_fk),
    FOREIGN KEY (mb_studenta_fk) REFERENCES studenti(maticni_broj) ON DELETE CASCADE,
    FOREIGN KEY (id_drzave_fk) REFERENCES drzave(id)
);

CREATE TABLE skolovanja(
    id          INT NOT NULL,
    odkad       DATE NOT NULL,
    dokad       DATE NOT NULL,
    zvanje      VARCHAR(60),
    ime_skole   VARCHAR(45),
    mb_studenta INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (mb_studenta) REFERENCES studenti(maticni_broj) ON DELETE CASCADE    
);

CREATE TABLE radna_iskustva(
    id          INT NOT NULL,
    odkad       DATE NOT NULL,
    dokad       DATE NOT NULL,
    zvanje      VARCHAR(30),
    zaposlenik  VARCHAR(45),
    mb_studenta INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (mb_studenta) REFERENCES studenti(maticni_broj) ON DELETE CASCADE    
);

CREATE TABLE vozacke_dozvole(
    mb_studenta INT NOT NULL,
    am          TINYINT,
    a1          TINYINT,
    a2          TINYINT,
    a           TINYINT,
    b1          TINYINT,
    b           TINYINT,
    be          TINYINT,
    c           TINYINT,
    c1          TINYINT,
    c1e         TINYINT,
    ce          TINYINT,
    d1          TINYINT,
    d1e         TINYINT,
    de          TINYINT,
    d           TINYINT,

    PRIMARY KEY (mb_studenta),
    FOREIGN KEY (mb_studenta) REFERENCES studenti(maticni_broj) ON DELETE CASCADE
);