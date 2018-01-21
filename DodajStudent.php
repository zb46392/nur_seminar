<?php

$dataMissing = array();
$maticniBroj = "";
$ime = "";
$prezime = "";
$tel = "";
$email = "";
$rojendan = "";

$message = "";
$success = false;

empty($_POST['maticni_broj']) ? $dataMissing[] = 'Matični broj' : $maticniBroj .= trim($_POST['maticni_broj']);

empty($_POST['ime']) ? $dataMissing[] = 'Ime' : $ime .= trim($_POST['ime']);

empty($_POST['prezime']) ? $dataMissing[] = 'Prezime' : $prezime .= trim($_POST['prezime']);

$tel .= trim($_POST['telefon']);
$email .= trim($_POST['email']);
$rojendan .= trim($_POST['rojendan']);

if (empty($dataMissing)) {
    require_once 'DataBaseConn.php';
    try {
        insertStudent($dbc);
        insertVozacku($dbc);
        insertRadnoIskustvo($dbc);
        $message .= "Student je pohranjen";
        $success = true;
    } catch (Exception $exc) {
        $message .= $exc->getMessage();
    } finally {
        mysqli_close($dbc);
    }
} else {
    $message .= 'Unesite sljedeće podatke: ';
    $message .= implode(", ", $dataMissing);
}

echo json_encode(array("message" => $message, "success" => $success));

function insertStudent($dbc) {
    $query = "call insert_student(?,?,?,?,?,?)";

    $stmt = mysqli_prepare($dbc, $query);

    /*
      i Integer
      d Doubles
      b Blobs
      s Everything else
     */
    mysqli_stmt_bind_param($stmt, "isssss", $_POST["maticni_broj"], $_POST["ime"], $_POST["prezime"], 
            $_POST["telefon"], $_POST["email"], $_POST["rojendan"]);

    mysqli_stmt_execute($stmt);


    $affectedRows = mysqli_stmt_affected_rows($stmt);

    if ($affectedRows != 1) {
        $error = 'Došlo je do greške: ' . mysqli_error($dbc);
        mysqli_stmt_close($stmt);
        throw new Exception($error);
    }

    mysqli_stmt_close($stmt);

    return true;
}

function insertVozacku($dbc) {
    if (filter_input(INPUT_POST, "vozacka")) {
        $query = "call insert_vozacku_dozvolu(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $vozacka = array("AM" => 0, "A1" => 0, "A2" => 0, "A" => 0, "B1" => 0, "B" => 0, "BE" => 0,
            "C" => 0, "C1" => 0, "C1E" => 0, "CE" => 0, "D1" => 0, "D1E" => 0, "DE" => 0, "D" => 0);

        array_walk($_POST["vozacka"], function($kategorija) use(&$vozacka) {
            $vozacka[$kategorija] = 1;
        });

        $stmt = mysqli_prepare($dbc, $query);

        /*
          i Integer
          d Doubles
          b Blobs
          s Everything else
         */
        mysqli_stmt_bind_param($stmt, "iiiiiiiiiiiiiiii", $_POST["maticni_broj"], $vozacka["AM"], $vozacka["A1"], $vozacka["A2"], $vozacka["A"], $vozacka["B1"], $vozacka["B"], $vozacka["BE"], $vozacka["C"], $vozacka["C1"], $vozacka["C1E"], $vozacka["CE"], $vozacka["D1"], $vozacka["D1E"], $vozacka["DE"], $vozacka["D"]);

        mysqli_stmt_execute($stmt);


        $affectedRows = mysqli_stmt_affected_rows($stmt);

        if ($affectedRows != 1) {
            $error = 'Došlo je do greške: ' . mysqli_error($dbc);
            mysqli_stmt_close($stmt);
            throw new Exception($error);
        }

        mysqli_stmt_close($stmt);
    }

    return true;
}

function insertRadnoIskustvo($dbc) {
    if(filter_input(INPUT_POST, "radnaIskustva")) {
        $radnaIskustva = $_POST["radnaIskustva"];

        array_walk($radnaIskustva, function($iskustvo) use($dbc) {
            $query = "call insert_radno_iskustvo(?,?,?,?,?)";
            $stmt = mysqli_prepare($dbc, $query);

            /*
              i Integer
              d Doubles
              b Blobs
              s Everything else
             */
            mysqli_stmt_bind_param($stmt, "ssssi", $iskustvo["odkad"], $iskustvo["dokad"], $iskustvo["zvanje"], $iskustvo["poslodavac"], $_POST["maticni_broj"]);

            mysqli_stmt_execute($stmt);


            $affectedRows = mysqli_stmt_affected_rows($stmt);


            if ($affectedRows != 1) {
                $error = 'Došlo je do greške: ' . mysqli_error($dbc);
                mysqli_stmt_close($stmt);
                throw new Exception($error);
            }

            mysqli_stmt_close($stmt);
        });
    }

    return true;
}
