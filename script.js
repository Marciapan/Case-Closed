console.log("Testing connection.... Link established.");

var nextButton = document.querySelector("#knop1");
var emailCheckButton = document.querySelector("#knop2");
var finalButton = document.querySelector("#knop3");
var emailField = document.querySelector("#text1");

//Tekst letter voor letter laten zien.
var counter1 = 0;
var counter2 = 0;
var txt1 = 'Hallo inspecteurs, ik heb een missie voor jullie.' +
    ' Een hacker wilt de data van de hva stelen, en jullie moet dit voorkomen.' +
    ' Kom achter het E-mailadres en het wachtwoord van de hacker, voordat hij zijn aanval loslaat.' +
    ' Na het doorgeven van het E-mailadres krijgen jullie van mij de volgorde van de nummers op het slot';
var txt2 = 'Hallo inspecteurs, jullie hebben de koffer geopend. ' +
    'Via deze site is het veilig om met mij te praten. ' +
    'We zijn nu op zoek naar het wachtwoord van de hacker die de hva gaat aanvallen. ' +
    'De hints in deze koffer helpen je op weg. ' +
    'Als je denkt het wachtwoord te hebben, kan je het aan ons doorgeven.';
var speed = 50; /* The speed/duration of the effect in milliseconds */


function showEmail() {
    console.log("Volgende stap");
    emailField.classList.remove("hidden");
    emailCheckButton.classList.remove("hidden");
}

function checkAnswerEmail() {
    if (emailField.value != "luciajonkhoff@outlook.nl") {
        console.log("fail");
    } else {
        console.log("succes");
        typeWriter2();
    }
}

function typeWriter() {
    if (counter1 < txt1.length) {
        document.getElementById("one").innerHTML += txt1.charAt(counter1);
        counter1++;
        setTimeout(typeWriter, speed);
    } else {
        nextButton.classList.add("visible");
    }
}

function typeWriter2() {
    if (counter2 < txt2.length) {
        document.getElementById("two").innerHTML += txt2.charAt(counter2);
        counter2++;
        setTimeout(typeWriter, speed);
    } else {
        finalButton.classList.add("visible");
    }
}

typeWriter();

nextButton.addEventListener("click", showEmail);
emailCheckButton.addEventListener("click", checkAnswerEmail);