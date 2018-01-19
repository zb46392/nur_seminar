$(document).ready(function () {

    var insertStudentForm = new InsertStudentForm();
//
//    insertStudentForm.getForm().dialog({
//        autoOpen: false,
//        modal: true,
//        closeText: "Zatvori",
//        buttons: [{
//                text: "Pohrani",
//                type: "submit",
//                click: function () {
//                    $.post("DodajStudent.php", insertStudentForm.getData(), function (data) {
//                        $("<h5>", {title: "Novi Student"}).append(data.message).dialog({
//                            modal: true,
//                            closeText: "Zatvori",
//                            buttons: [{
//                                    text: "OK",
//                                    click: function () {
//                                        $(this).dialog("close");
//                                    }
//                                }]
//                        });
//                    }, "json");
//                }
//            }]
//    });

    $("#liDodajStudent").click(function () {
//        insertStudentForm.getForm().dialog("open");
        $(".container").empty();
        $(".container").addClass("jumbotron");
        $(".container").append(insertStudentForm.getForm());
//        $("#noviStudent").scrollTop();
    });

});

var InsertStudentForm = function () {
    var insertStudentForm;
    var obrazovanja;
    var radnaIskustva;

    this.construct = function () {
        obrazovanja = new Array();
        radnaIskustva = new Array();
        insertStudentForm = createNewStudentForm();

        insertStudentForm.append(createMaticniBrojLabel());
        insertStudentForm.append(createMaticniBrojInput());
        insertStudentForm.append(createImeLabel());
        insertStudentForm.append(createImeInput());
        insertStudentForm.append(createPrezimeLabel());
        insertStudentForm.append(createPrezimeInput());
        insertStudentForm.append(createRojendanLabel());
        insertStudentForm.append(createRojendanInput());
        insertStudentForm.append(createTelefonLabel());
        insertStudentForm.append(createTelefonInput());
        insertStudentForm.append(createEmailLabel());
        insertStudentForm.append(createEmailInput());
        insertStudentForm.append(createObaveznaPoljaObavjest());
        insertStudentForm.append(createVozackiFieldset());
        insertStudentForm.append(createSkulaFieldset());
        insertStudentForm.append(createRadnoIskustvoFieldset());
    };

    var createNewStudentForm = function () {
        return $("<form>",
                {
                    id: "noviStudent",
                    title: "Novi Student",
                    method: "post"
                });
    };

    var createMaticniBrojLabel = function () {
        return $("<label>", {
            for : "maticni_broj"
        }).append("Matični broj*");
    };

    var createMaticniBrojInput = function () {
        return $("<input>", {
            type: "text",
            name: "maticni_broj",
            id: "maticni_broj",
            class: "form-control",
            title: "Unesite matični broj..."
        });
    };

    var createImeLabel = function () {
        return $("<label>", {
            for : "ime"
        }).append("Ime*");
    };

    var createImeInput = function () {
        return $("<input>", {
            type: "text",
            name: "ime",
            id: "ime",
            class: "form-control",
            title: "Unesite ime..."
        });
    };

    var createPrezimeLabel = function () {
        return $("<label>", {
            for : "prezime"
        }).append("Prezime*");
    };

    var createPrezimeInput = function () {
        return $("<input>", {
            type: "text",
            name: "prezime",
            id: "prezime",
            class: "form-control",
            title: "Unesite prezime..."
        });
    };

    var createRojendanLabel = function () {
        return $("<label>", {
            for : "rojendan"
        }).append("Rođendan");
    };

    var createRojendanInput = function () {
        return $("<input>", {
            type: "text",
            name: "rojendan",
            id: "rojendan",
            class: "form-control",
            title: "Unesite rođendan: Format DD.MM.GGGG..."
        });
    };

    var createTelefonLabel = function () {
        return $("<label>", {
            for : "telefon"
        }).append("Telefon");
    };

    var createTelefonInput = function () {
        return $("<input>", {
            type: "text",
            name: "telefon",
            id: "telefon",
            class: "form-control",
            title: "Unesite broj telefona..."
        });
    };

    var createEmailLabel = function () {
        return $("<label>", {
            for : "email"
        }).append("E-mail");
    };

    var createEmailInput = function () {
        return $("<input>", {
            type: "text",
            name: "email",
            id: "email",
            title: "Unesite e-mail adresu...",
            class: "form-control"
        });
    };

    var createObaveznaPoljaObavjest = function () {
        return $("<small>").append("Polja sa * su obavezna<br />");
    };

    var createVozackiFieldset = function () {
        var fieldset = $("<fieldset>", {
            name: "vozacki",
            id: "vozacki"
        });

        fieldset.append($("<legend>").append("<br/>Vozačka dozvola"));


        fieldset.append("Am: ");
        fieldset.append($("<input>", {
            type: "checkbox",
            name: "vozacki",
            value: "Am"
        }));

        fieldset.append(" A1: ");
        fieldset.append($("<input>", {
            type: "checkbox",
            name: "vozacki",
            value: "A1"
        }));

        fieldset.append(" A2: ");
        fieldset.append($("<input>", {
            type: "checkbox",
            name: "vozacki",
            value: "A2"
        }));

        fieldset.append(" A: ");
        fieldset.append($("<input>", {
            type: "checkbox",
            name: "vozacki",
            value: "A"
        }));

        fieldset.append("<br />B1: ");
        fieldset.append($("<input>", {
            type: "checkbox",
            name: "vozacki",
            value: "B1"
        }));

        fieldset.append(" B: ");
        fieldset.append($("<input>", {
            type: "checkbox",
            name: "vozacki",
            value: "B"
        }));

        fieldset.append(" BE: ");
        fieldset.append($("<input>", {
            type: "checkbox",
            name: "vozacki",
            value: "BE"
        }));

        fieldset.append("<br />C: ");
        fieldset.append($("<input>", {
            type: "checkbox",
            name: "vozacki",
            value: "C"
        }));

        fieldset.append(" C1: ");
        fieldset.append($("<input>", {
            type: "checkbox",
            name: "vozacki",
            value: "C1"
        }));

        fieldset.append(" C1E: ");
        fieldset.append($("<input>", {
            type: "checkbox",
            name: "vozacki",
            value: "C1E"
        }));

        fieldset.append(" CE: ");
        fieldset.append($("<input>", {
            type: "checkbox",
            name: "vozacki",
            value: "CE"
        }));

        fieldset.append("<br />D1: ");
        fieldset.append($("<input>", {
            type: "checkbox",
            name: "vozacki",
            value: "D1"
        }));

        fieldset.append(" D1E: ");
        fieldset.append($("<input>", {
            type: "checkbox",
            name: "vozacki",
            value: "D1E"
        }));

        fieldset.append(" DE: ");
        fieldset.append($("<input>", {
            type: "checkbox",
            name: "vozacki",
            value: "DE"
        }));

        fieldset.append(" D: ");
        fieldset.append($("<input>", {
            type: "checkbox",
            name: "vozacki",
            value: "D"
        }));


        return fieldset;
    };

    var createSkulaFieldset = function () {
        var me = this;

        var fieldset = $("<fieldset>", {
            name: "skula",
            id: "skula"
        });

        fieldset.append($("<legend>").append("<br/>Obrazovanje"));
        fieldset.append($("<div>", {
            name: "obrazovanja",
            id: "obrazovanja"
        }));
        var skola = $("<button>").append("Dodaj obrazovanje");

        fieldset.append(skola.click(function (event) {
            me.createObrazovanjeForm();

            return false;
        }));

        return fieldset;
    };

    createObrazovanjeForm = function () {
        var obrazovanjeForm = $("<form>",
                {
                    id: "obrazovanjeForm",
                    title: "Dodaj obrazovanje"
                });

        var odkad = $("<input>", {
            type: "text",
            name: "odkad",
            id: "odkad",
            class: "form-control",
            title: "Unesite datum početka obrazovanja: Format DD.MM.GGGG..."
        });

        var dokad = $("<input>", {
            type: "text",
            name: "dokad",
            id: "dokad",
            class: "form-control",
            title: "Unesite datum završetka obrazovanja: Format DD.MM.GGGG..."
        });

        var zvanje = $("<input>", {
            type: "text",
            name: "zvanje",
            id: "zvanje",
            class: "form-control",
            title: "Unesite steknuto zvanje..."
        });

        var imeSkule = $("<input>", {
            type: "text",
            name: "imeSkule",
            id: "imeSkule",
            class: "form-control",
            title: "Unesite ime Škole..."
        });

        obrazovanjeForm.append($("<label>", {
            for : "odkad"
        }).append("Od Kad"));
        obrazovanjeForm.append(odkad);

        obrazovanjeForm.append($("<label>", {
            for : "dokad"
        }).append("Do Kad"));
        obrazovanjeForm.append(dokad);


        obrazovanjeForm.append($("<label>", {
            for : "zvanje"
        }).append("Zvanje"));
        obrazovanjeForm.append(zvanje);

        obrazovanjeForm.append($("<label>", {
            for : "imeSkule"
        }).append("Ime obrazovne ustanove"));
        obrazovanjeForm.append(imeSkule);

        obrazovanjeForm.dialog({
            modal: true,
            closeText: "Zatvori",
            buttons: [{
                    text: "Dodaj",
                    click: function () {
                        // VALIDATE FORM!
                        var id = jQuery.now();
                        obrazovanja.push({
                            id: id,
                            odkad: odkad[0].value,
                            dokad: dokad[0].value,
                            zvanje: zvanje[0].value,
                            imeSkule: imeSkule[0].value
                        });

                        var obrazovanje = $("<div>", {
                            id: id
                        });

                        var lapisButun = $("<button>", {
                            class: "ui-button ui-widget ui-corner-all ui-button-icon-only",
                            title: "Uredi"
                        }).append($("<span>", {
                            class: "ui-icon ui-icon-pencil"
                        }));

                        lapisButun.click(function (event) {
                            // IMPLEMENT EDIT

                            return false;
                        });

                        var smeceButun = $("<button>", {
                            class: "ui-button ui-widget ui-corner-all ui-button-icon-only",
                            title: "Briši"
                        }).append($("<span>", {
                            class: "ui-icon ui-icon-trash"
                        }));

                        smeceButun.click(function (event) {
                            // IMPLEMENT DELETE

                            return false;
                        });

                        var naslov = $("<h3>").append(odkad[0].value + " - " + dokad[0].value + " ");
                        naslov.append(lapisButun);
                        naslov.append(smeceButun);

                        obrazovanje.append(naslov);
                        obrazovanje.append($("<h5>").append("<b>Zvanje: </b>" + zvanje[0].value));
                        obrazovanje.append($("<h5>").append("<b>Ime obrazovne ustanove: </b>" + imeSkule[0].value));
                        obrazovanje.append("<br/>");

                        $(this).dialog("close");
                        $("#obrazovanja").append(obrazovanje);
                    }
                }]
        });


    };

    var createRadnoIskustvoFieldset = function () {
        var me = this;

        var fieldset = $("<fieldset>", {
            name: "iskustvo",
            id: "iskustvo"
        });

        fieldset.append($("<legend>").append("<br/>Radno iskustvo"));
        fieldset.append($("<div>", {
            name: "radnoIskustvo",
            id: "radnoIskustvo"
        }));
        var iskustvo = $("<button>").append("Dodaj radno iskustvo");

        fieldset.append(iskustvo.click(function (event) {
            me.createRadnoIskustvoForm();

            return false;
        }));

        return fieldset;
    };

    createRadnoIskustvoForm = function () {
        var iskustvoForm = $("<form>",
                {
                    id: "iskustvoForm",
                    title: "Dodaj radno iskustvo"
                });

        var odkad = $("<input>", {
            type: "text",
            name: "odkad",
            id: "odkad",
            class: "form-control",
            title: "Unesite datum početka rada: Format DD.MM.GGGG..."
        });

        var dokad = $("<input>", {
            type: "text",
            name: "dokad",
            id: "dokad",
            class: "form-control",
            title: "Unesite datum završetka rada: Format DD.MM.GGGG..."
        });

        var zvanje = $("<input>", {
            type: "text",
            name: "zvanje",
            id: "zvanje",
            class: "form-control",
            title: "Unesite zaposlenje..."
        });

        var poslodavac = $("<input>", {
            type: "text",
            name: "poslodavac",
            id: "poslodavac",
            class: "form-control",
            title: "Unesite ime poslodavca..."
        });

        iskustvoForm.append($("<label>", {
            for : "odkad"
        }).append("Od Kad"));
        iskustvoForm.append(odkad);

        iskustvoForm.append($("<label>", {
            for : "dokad"
        }).append("Do Kad"));
        iskustvoForm.append(dokad);


        iskustvoForm.append($("<label>", {
            for : "zaposlenje"
        }).append("Zaposlenje"));
        iskustvoForm.append(zvanje);

        iskustvoForm.append($("<label>", {
            for : "poslodavac"
        }).append("Poslodavac"));
        iskustvoForm.append(poslodavac);

        iskustvoForm.dialog({
            modal: true,
            closeText: "Zatvori",
            buttons: [{
                    text: "Dodaj",
                    click: function () {
                        // VALIDATE FORM!
                        var id = jQuery.now();
                        radnaIskustva.push({
                            id: id,
                            odkad: odkad[0].value,
                            dokad: dokad[0].value,
                            zvanje: zvanje[0].value,
                            poslodavac: poslodavac[0].value
                        });

                        var iskustvoDiv = $("<div>", {
                            id: id
                        });

                        var lapisButun = $("<button>", {
                            class: "ui-button ui-widget ui-corner-all ui-button-icon-only",
                            title: "Uredi"
                        }).append($("<span>", {
                            class: "ui-icon ui-icon-pencil"
                        }));

                        lapisButun.click(function (event) {
                            // IMPLEMENT EDIT

                            return false;
                        });

                        var smeceButun = $("<button>", {
                            class: "ui-button ui-widget ui-corner-all ui-button-icon-only",
                            title: "Briši"
                        }).append($("<span>", {
                            class: "ui-icon ui-icon-trash"
                        }));

                        smeceButun.click(function (event) {
                            // IMPLEMENT DELETE

                            return false;
                        });

                        var naslov = $("<h3>").append(odkad[0].value + " - " + dokad[0].value + " ");
                        naslov.append(lapisButun);
                        naslov.append(smeceButun);

                        iskustvoDiv.append(naslov);
                        iskustvoDiv.append($("<h5>").append("<b>Zvanje: </b>" + zvanje[0].value));
                        iskustvoDiv.append($("<h5>").append("<b>Poslodavac: </b>" + poslodavac[0].value));
                        iskustvoDiv.append("<br/>");

                        $(this).dialog("close");
                        $("#radnoIskustvo").append(iskustvoDiv);
                    }
                }]
        });


    };

    var createPohraniButun = function () {
        var pohraniButun = $("<button>", {});
    };
    
    this.getForm = function () {
        return insertStudentForm;
    };

    this.getData = function () {
        return {
            maticni_broj: $("#maticni_broj").val(),
            ime: $("#ime").val(),
            prezime: $("#prezime").val(),
            telefon: $("#telefon").val(),
            email: $("#email").val()
        };
    };

    this.construct();
};