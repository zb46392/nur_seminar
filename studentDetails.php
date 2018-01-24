<?php

require_once 'DataBaseConn.php';

if (isset($_GET["maticni_broj"])) {
    try {
        $studentOsnovno = returnStudentBasicInformation($dbc);
        $vozacka = returnVozacku($dbc);
        $skolovanja = returnSkolovanja($dbc);
        $radnaIskustva = returnRadnaIskustva($dbc);
    } catch (Exception $exc) {
        echo $exc->getTraceAsString();
    } finally {
        mysqli_close($dbc);
    }

    echo json_encode(array("ime" => $studentOsnovno["ime"],
        "prezime" => $studentOsnovno["prezime"],
        "rojendan" => $studentOsnovno["rojendan"],
        "telefon" => $studentOsnovno["telefon"],
        "email" => $studentOsnovno["email"],
        "vozacka" => implode(", ", $vozacka),
        "obrazovanja" => $skolovanja,
        "iskustva" => $radnaIskustva
    ));
}

function returnStudentBasicInformation($dbc) {
    $query = "select ime,
                    prezime,
                    rojendan,
                    telefon,
                    email
            from    studenti 
            where   maticni_broj=?";

    $stmt = $dbc->prepare($query);
    $stmt->bind_param("i", $_GET["maticni_broj"]);
    $stmt->execute();
    $osnovneInfo = [];
    $stmt->bind_result($osnovneInfo["ime"], $osnovneInfo["prezime"], $osnovneInfo["rojendan"], $osnovneInfo["telefon"], $osnovneInfo["email"]);
    $stmt->fetch();
    $stmt->close();

    return $osnovneInfo;
}

function returnVozacku($dbc) {
    $query = "select am, a1, a2, a, 
                    b1, b, be, 
                    c1, c1e, c, ce, 
                    d1, d1e, d, de
            from    vozacke_dozvole 
            where   mb_studenta=?";

    $stmt = $dbc->prepare($query);
    $stmt->bind_param("i", $_GET["maticni_broj"]);
    $stmt->execute();
    $row = [];
    $stmt->bind_result($row[0], $row[1], $row[2], $row[3], $row[4], $row[5], $row[6], $row[7], $row[8], $row[9], $row[10], $row[11], $row[12], $row[13], $row[14]);
    $stmt->fetch();
    $stmt->close();

    $vozacka = array();

    if ($row[0] === 1) {
        $vozacka[] = "AM";
    }
    if ($row[1] === 1) {
        $vozacka[] = "A1";
    }
    if ($row[2] === 1) {
        $vozacka[] = "A2";
    }
    if ($row[3] === 1) {
        $vozacka[] = "A";
    }
    if ($row[4] === 1) {
        $vozacka[] = "B1";
    }
    if ($row[5] === 1) {
        $vozacka[] = "B";
    }
    if ($row[6] === 1) {
        $vozacka[] = "BE";
    }
    if ($row[7] === 1) {
        $vozacka[] = "C1";
    }
    if ($row[8] === 1) {
        $vozacka[] = "C1E";
    }
    if ($row[9] === 1) {
        $vozacka[] = "C";
    }
    if ($row[10] === 1) {
        $vozacka[] = "CE";
    }
    if ($row[11] === 1) {
        $vozacka[] = "D1";
    }
    if ($row[12] === 1) {
        $vozacka[] = "D1E";
    }
    if ($row[13] === 1) {
        $vozacka[] = "D1";
    }
    if ($row[14] === 1) {
        $vozacka[] = "DE";
    }

    return $vozacka;
}

function returnSkolovanja($dbc) {
    $query = "select odkad,
            dokad,
            zvanje,
            ime_skole
            from    skolovanja 
            where   mb_studenta=?";

    $stmt = $dbc->prepare($query);
    $stmt->bind_param("i", $_GET["maticni_broj"]);
    $stmt->execute();
    $skolovanja = [];
    $row = [];
    $stmt->bind_result($row["odkad"], $row["dokad"], $row["zvanje"], $row["ime_skole"]);

    while ($stmt->fetch()) {
        $skolovanja[] = array("odkad"=>$row["odkad"], "dokad"=>$row["dokad"], "zvanje"=>$row["zvanje"], "ime_skole"=>$row["ime_skole"]);
    }

    return $skolovanja;
}

function returnRadnaIskustva($dbc) {
    $query = "select odkad,
            dokad,
            zvanje,
            poslodavac
            from    radna_iskustva 
            where   mb_studenta=?";

    $stmt = $dbc->prepare($query);
    $stmt->bind_param("i", $_GET["maticni_broj"]);
    $stmt->execute();
    $iskustva = [];
    $row = [];
    $stmt->bind_result($row["odkad"], $row["dokad"], $row["zvanje"], $row["poslodavac"]);
    while ($stmt->fetch()) {
        $iskustva[] = array("odkad"=>$row["odkad"], "dokad"=>$row["dokad"], "zvanje"=>$row["zvanje"], "poslodavac"=>$row["poslodavac"]);
    }
    return $iskustva;
}
