GRANT SELECT, INSERT, UPDATE, DELETE ON student_cv.* 
    TO 'student'@'localhost'
    IDENTIFIED BY 'test';

GRANT EXECUTE ON PROCEDURE insert_student TO 'student'@'localhost';
GRANT EXECUTE ON PROCEDURE insert_skolovanje TO 'student'@'localhost';
GRANT EXECUTE ON PROCEDURE insert_radno_iskustvo TO 'student'@'localhost';
GRANT EXECUTE ON PROCEDURE insert_vozacku_dozvolu TO 'student'@'localhost';