<?php

DEFINE('DB_USER', 'student');
DEFINE('DB_PASSWORD', 'test');
DEFINE('DB_HOST', 'localhost');
DEFINE('DB_NAME', 'student_cv');

//$dbc = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
//        OR die('Neuspješno povezivanje na bazu: ' . mysqli_connect_error());

$dbc = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

if ($dbc->connect_error) {
    die("Connection failed: " . $dbc->connect_error);
}

