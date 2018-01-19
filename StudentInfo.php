<?php

require_once 'DataBaseConn.php';
include 'index.html';

$query = "  select  maticni_broj,
                    ime,
                    prezime,
                    tel,
                    email
            from    studenti";

$response = mysqli_query($dbc, $query);

if($response){    
    echo '<table class="table table-striped table-bordered table-hover table-condensed" align="left" cellspacing="5" cellpadding="8">
            <thead>
                <tr>
                    <th align="left"><b>Matični broj</b></td>
                    <th align="left"><b>Ime</b></td>
                    <th align="left"><b>Prezime</b></td>
                    <th align="left"><b>Telefon</b></td>
                    <th align="left"><b>E-mail</b></td>
                </tr>
            </thead>';
    
    while($row = mysqli_fetch_array($response)){
        echo '<tr>' .
                '<td align="left">' . $row['maticni_broj'] . '</td>' .
                '<td align="left">' . $row['ime'] . '</td>' .
                '<td align="left">' . $row['prezime'] . '</td>' .
                '<td align="left">' . $row['tel'] . '</td>' .
                '<td align="left">' . $row['email'] . '</td>' .
            '</tr>';
    }
    echo '</table>';
} else {
    echo "Neuspješno izvršavanje upita...";
    
    echo mysqli_error($dbc);
}

mysqli_close($dbc);
