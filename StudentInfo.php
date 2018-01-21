<?php

require_once 'DataBaseConn.php';

$query = "  select  maticni_broj,
                    ime,
                    prezime,
                    rojendan,
                    telefon,
                    email
            from    studenti";

$response = mysqli_query($dbc, $query);

if($response){    
//    echo '<table class="table table-striped table-bordered table-hover table-condensed" align="left" cellspacing="5" cellpadding="8">
//            <thead>
//                <tr>
//                    <th align="left"><b>Matični broj</b></td>
//                    <th align="left"><b>Ime</b></td>
//                    <th align="left"><b>Prezime</b></td>
//                    <th align="left"><b>Datum rođenja</b></td>
//                    <th align="left"><b>Telefon</b></td>
//                    <th align="left"><b>E-mail</b></td>
//                </tr>
//            </thead>';
//    
//    while($row = mysqli_fetch_array($response)){
//        echo '<tr>' .
//                '<td align="left">' . $row['maticni_broj'] . '</td>' .
//                '<td align="left">' . $row['ime'] . '</td>' .
//                '<td align="left">' . $row['prezime'] . '</td>' .
//                '<td align="left">' . $row['rojendan'] . '</td>' .
//                '<td align="left">' . $row['telefon'] . '</td>' .
//                '<td align="left">' . $row['email'] . '</td>' .
//            '</tr>';
//    }
//    echo '</table>';
    $studenti = array();
    while($row = mysqli_fetch_array($response)){
        $studenti[] = array(
            "maticni_broj" => $row["maticni_broj"],
            "ime" => $row["ime"],
            "prezime" => $row["prezime"],
            "rojendan" => $row["rojendan"],
            "telefon" => $row["telefon"],
            "email" => $row["email"]
        );
    }
    
    echo json_encode($studenti);
    
} else {
    echo "Neuspješno izvršavanje upita...";
    
    echo mysqli_error($dbc);
}

mysqli_close($dbc);
