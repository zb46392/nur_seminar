$(document).ready(function () {

    $("#liPopisStudenata").click(function () {
        var studentTable = new StudentTable();
        $(".container").empty();
        $(".container").append(studentTable.getTable());
        $("#studentTable").scrollTop();
    });
});

var StudentTable = function () {
    var table;

    this.construct = function () {
        table = createTable();
        table.append(createTableHead());
        table.append(createTableBody());
    };

    var createTable = function () {
        return $("<table>", {
            class: "table table-striped table-bordered table-hover table-condensed",
            align: "left",
            cellspacing: "5",
            cellpadding: "8"
        });
    };

    var createTableHead = function () {
        var headRow = $("<tr>");

        headRow.append($("<th>", {align: "center"}).append("<b>Matični broj</b>"));
        headRow.append($("<th>", {align: "center"}).append("<b>Ime</b>"));
        headRow.append($("<th>", {align: "center"}).append("<b>Prezime</b>"));
        headRow.append($("<th>", {align: "center"}).append("<b>Datum rođenja</b>"));
        headRow.append($("<th>", {align: "center"}).append("<b>Telefon</b>"));
        headRow.append($("<th>", {align: "center"}).append("<b>E-mail</b>"));

        return $("<thead>").append(headRow);
    };

    var createTableBody = function () {
        var tableBody = $("<tbody>");

        jQuery.get("../StudentInfo.php", "info", function (data, textStatus, jqXHR) {
            $.each(data, function (index, student) {
                var tableRow = $("<tr>", {class: "studend"});
                tableRow.append($("<td>", {align: "center"}).append(student.maticni_broj));
                tableRow.append($("<td>", {align: "center"}).append(student.ime));
                tableRow.append($("<td>", {align: "center"}).append(student.prezime));
                tableRow.append($("<td>", {align: "center"}).append(student.rojendan));
                tableRow.append($("<td>", {align: "center"}).append(student.telefon));
                tableRow.append($("<td>", {align: "center"}).append(student.email));
                tableBody.append(tableRow);
            });
        }, "json");
        
        return tableBody;
    };

    this.getTable = function () {
        return table;
    }

    this.construct();
};

