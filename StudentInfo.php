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
