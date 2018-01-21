DELIMITER //

CREATE PROCEDURE insert_student( maticni_broj INT, 
                                ime VARCHAR(30), 
                                prezime VARCHAR(30), 
                                telefon VARCHAR(30), 
                                email VARCHAR(45),
                                rojendan DATE
                            )
    MODIFIES SQL DATA
    BEGIN
        INSERT INTO studenti(   maticni_broj, 
                                ime, 
                                prezime, 
                                telefon, 
                                email,
                                rojendan
                            ) 
        VALUES              (   maticni_broj, 
                                ime, 
                                prezime, 
                                telefon, 
                                email,
                                rojendan
                            );


    END;
//

CREATE PROCEDURE insert_skolovanje( odkad DATE,
                                    dokad DATE,
                                    zvanje VARCHAR(60),
                                    ime_skole VARCHAR(45),
                                    mb_studenta INT
                                    )
    MODIFIES SQL DATA
    BEGIN
    INSERT INTO skolovanja( odkad, 
                            dokad,
                            zvanje,
                            ime_skole,
                            mb_studenta
                            )
    VALUES              (   odkad,
                            dokad,
                            zvanje,
                            ime_skole,
                            mb_studenta
                        );
    END;
//

CREATE PROCEDURE insert_radno_iskustvo( 
                                    odkad DATE,
                                    dokad DATE,
                                    zvanje VARCHAR(60),
                                    poslodavac VARCHAR(45),
                                    mb_studenta INT
                                    )
    MODIFIES SQL DATA
    BEGIN
    INSERT INTO radna_iskustva( odkad, 
                            dokad,
                            zvanje,
                            poslodavac,
                            mb_studenta
                            )
    VALUES              (   odkad,
                            dokad,
                            zvanje,
                            poslodavac,
                            mb_studenta
                        );
    END;
//

CREATE PROCEDURE insert_vozacku_dozvolu(
    mb_studenta INT,
    am TINYINT,
    a1 TINYINT,
    a2 TINYINT,
    a TINYINT,
    b1 TINYINT,
    b TINYINT,
    be TINYINT,
    c TINYINT,
    c1 TINYINT,
    c1e TINYINT,
    ce TINYINT,
    d1 TINYINT,
    d1e TINYINT,
    de TINYINT,
    d TINYINT)
    MODIFIES SQL DATA
    BEGIN
    INSERT INTO vozacke_dozvole(
                                mb_studenta,
                                am, 
                                a1, 
                                a2, 
                                a, 
                                b1, 
                                b, 
                                be, 
                                c, 
                                c1, 
                                c1e, 
                                ce, 
                                d1, 
                                d1e, 
                                de, 
                                d
                                ) 
    VALUES(
            mb_studenta,
            am, 
            a1, 
            a2, 
            a, 
            b1, 
            b, 
            be, 
            c, 
            c1, 
            c1e, 
            ce, 
            d1, 
            d1e, 
            de, 
            d
            );
    END;
DELIMITER ;
