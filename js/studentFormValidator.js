function validateStudentForm() {
//    var maticni_broj = document.forms["insertStudentForm"]["maticni_broj"];
//    var ime = document.forms["insertStudentForm"]["ime"];
//    var prezime = document.forms["insertStudentForm"]["prezime"];
//    var tel = document.forms["insertStudentForm"]["telefon"];
    
//    maticni_broj.required = true;
//    maticni_broj.pattern = /(?![0-9])./g;
//    ime.required = true;
//    prezime.required = true;
//    tel.pattern = /(?![0-9])./g;

//    if (maticni_broj.value === "") {
//        maticni_broj.placeholder = "Matični broj je obavezno polje...";
//        return false;
//    }
//    } else if (/(?![0-9])./g.test(maticni_broj)) {
//        alert("Matični broj: dozvoljena su samo brojevi...");
//        return false;
//    } else if (ime === "") {
//        alert("Ime je obavezno polje...");
//        return false;
//    } else if (prezime === "") {
//        alert("Prezime je obavezno polje...");
//        return false;
//    } else if (/(?![0-9])./g.test(tel)) {
//        alert("Telefon: dozvoljena su samo brojevi...");
//        return false;
//    }
//
//
//
    return false;


//    var maticni_broj = document.forms["insertStudentForm"]["maticni_broj"];
//    
//    maticni_broj.oninvalid = function(){
//        this.setCustomValidity('Samo brojevi...');
//    };
}

function validateMaticniBroj(textfield) {
//    var maticni_broj = document.forms["insertStudentForm"]["maticni_broj"];
//    maticni_broj.oninvalid = function () {
//        if (maticni_broj.value === "") {
////            alert(maticni_broj.validationMessage);
//        } else {
////            alert('puno');
//        }
//    };
    if (textfield.value === "") {
        textfield.setCustomValidity('stavi nesto');
    } else {
        textfield.setCustomValidity('Samo brojevi...');
    }

}

function test() {
    var maticni_broj = document.forms["insertStudentForm"]["maticni_broj"];

//
//    if (maticni_broj === "") {
////        alert("Matični broj je obavezno polje...");
////        return false;
//    } else if (/(?![0-9])./g.test(maticni_broj)) {
////        alert("Matični broj: dozvoljena su samo brojevi...");
////        return false;
//    }
//    if(maticni_broj.checkValidity()){
//        alert("dude");
//    }
    alert(maticni_broj.validity.valid);
    return false;
}
