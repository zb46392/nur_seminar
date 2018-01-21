<?php
//
//$dataMissing = array();
//$maticniBroj = "";
//$ime = "";
//$prezime = "";
//$tel = "";
//$email = "";
//$rojendan = "";
//
//$message = "";
//
//empty($_POST['maticni_broj']) ? $dataMissing[] = 'Matični broj' : $maticniBroj .= trim($_POST['maticni_broj']);
//
//empty($_POST['ime']) ? $dataMissing[] = 'Ime' : $ime .= trim($_POST['ime']);
//
//empty($_POST['prezime']) ? $dataMissing[] = 'Prezime' : $prezime .= trim($_POST['prezime']);
//
//$tel .= trim($_POST['telefon']);
//$email .= trim($_POST['email']);
//$rojendan .= trim($_POST['rojendan']);
//
//if (empty($dataMissing)) {
//    require_once 'DataBaseConn.php';
//
//    $query = "call insert_student(?,?,?,?,?,?)";
//
//    $stmt = mysqli_prepare($dbc, $query);
//
//    /*
//      i Integer
//      d Doubles
//      b Blobs
//      s Everything else
//     */
//    mysqli_stmt_bind_param($stmt, "isssss", $maticniBroj, $ime, $prezime, $tel, $email, $rojendan);
//
//    mysqli_stmt_execute($stmt);
//
//    $affectedRows = mysqli_stmt_affected_rows($stmt);
//    
//
//    $message .= $affectedRows == 1 ? 'Student je pohranjen' :
//            'Došlo je do greške: ' . mysqli_error($dbc);
//
//    mysqli_stmt_close($stmt);
//    mysqli_close($dbc);
//} else {
//    $message .= 'Unesite sljedeće podatke: ';
//    $message .= implode(", ", $dataMissing);
//}
$message = implode(", ", $_POST["vozacka"]);
echo json_encode(array("message" => $message));