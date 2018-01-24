var StudentInfo = function (mb) {
    this.construct = function (mb) {
        jQuery.get("../StudentDetails.php", {maticni_broj: mb}, function (data, textStatus, jqXHR) {
            $(".container").empty();
            $(".container").removeClass("jumbotron");
            var studentDetails = $("<table>", {
                class: "studentDetails table table-bordered table-condensed",
                align: "left",
                cellspacing: "5",
                cellpadding: "8"});
            var detailsBody = $("<tbody>");
            detailsBody.append(createTableRow2Cells("Matični broj", mb));
            detailsBody.append(createTableRow2Cells("Ime", data.ime));
            detailsBody.append(createTableRow2Cells("Prezime", data.prezime));
            detailsBody.append(createTableRow2Cells("Datum rođenja", data.rojendan));
            detailsBody.append(createTableRow2Cells("Telefon", data.telefon));
            detailsBody.append(createTableRow2Cells("E-mail", data.email));
            detailsBody.append(createTableRow2Cells("Vozačka dozvola", data.vozacka));
            detailsBody.append(createTableRow2Cells("Obrazovanja", ""));
            $.each(data.obrazovanja, function (index, element) {
                detailsBody.append(createTableRow3Cells("", "Razdoblje",
                        element.odkad + " - " + element.dokad));
                detailsBody.append(createTableRow3Cells("", "Zvanje", element.zvanje));
                detailsBody.append(createTableRow3Cells("", "Ime obrazovne ustanove",
                        element.ime_skole));
            });
            detailsBody.append(createTableRow2Cells("Radna Iskustva", ""));
            $.each(data.iskustva, function (index, element) {
                detailsBody.append(createTableRow3Cells("", "Razdoblje",
                        element.odkad + " - " + element.dokad));
                detailsBody.append(createTableRow3Cells("", "Zaposlenje", element.zvanje));
                detailsBody.append(createTableRow3Cells("", "Ime poslodavca",
                        element.poslodavac));
            });
            
            $(".container").append(studentDetails.append(detailsBody));
        }, "json");
    };

    var createTableRow2Cells = function (cell1, cell2) {
        var row = $("<tr>");

        row.append($("<td>").append(cell1));
        row.append($("<td colspan='2'>").append(cell2));

        return row;
    };

    var createTableRow3Cells = function (cell1, cell2, cell3) {
        var row = $("<tr>");

        row.append($("<td>").append(cell1));
        row.append($("<td>").append(cell2));
        row.append($("<td>").append(cell3));

        return row;
    };

    this.construct(mb);
};