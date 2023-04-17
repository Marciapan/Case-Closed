console.log("Testing connection.... Link established.");

var background = document.querySelector(".flexbox");

var nextButton = document.querySelector("#knop1");
var emailCheckButton = document.querySelector("#knop2");
var finalButton = document.querySelector("#knop3");
var emailField = document.querySelector("#field1");
var passwordField = document.querySelector("#field2");

var hackerPic = document.querySelector("hackerPic");

//Tekst letter voor letter laten zien.
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var txt1 = 'Hallo inspecteurs, ik heb een missie voor jullie.' +
    // ' Alleen via deze website is het veilig om te communiceren. '+
    ' Een hacker wilt de data van de HvA stelen en wij moeten hem tegenhouden.' +
    ' Vind het E-mailadres en het wachtwoord van de hacker, voordat hij zijn aanval loslaat. ' +
    'Hints in deze koffer helpen jullie op weg. '+
    ' Na het doorgeven van het E-mailadres krijgen jullie van mij de volgorde van de nummers op het slot';
var txt2 = 'Hallo inspecteurs, jullie hebben het E-mailadres te pakken. ' +
    'We zijn nu op zoek naar het wachtwoord van de hacker die de hva gaat aanvallen. ' +
    'Als je denkt het wachtwoord te hebben, kan je het aan mij doorgeven.';
var txt3 = 'Hallo inspecteurs, dank jullie wel voor het E-mailadres en het wachtwoord. '+
            'Helaas is niets wat het lijkt. '+
            'Jullie hebben mij de sleutel gegeven tot alle data van de HvA. '+
            'Terwijl jullie bezig waren met alle puzzels, was ik bezig met het hacken van de beveiliging. '+
            'Het enige dat ik nog nodig had was een ingang. '+
            'Hartelijk bedankt.';
var speed = 50; 

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
        setTimeout(typeWriter2, speed);
    
    } else {
        passwordField.classList.remove("hidden");
        finalButton.classList.add("visible");
    }
}

function typeWriter3() {
    if (counter3 < txt3.length) {
        document.getElementById("three").innerHTML += txt3.charAt(counter3);
        counter3++;
        setTimeout(typeWriter3, speed);
    
    } else {
        console.log("Congrats you failed the world.")
    }
}

function showEmail() {
    console.log("Volgende stap");
    emailField.classList.remove("hidden");
    emailCheckButton.classList.remove("hidden");
}

function checkAnswerEmail() {
    if (emailField.value != "luciajonkhoff@outlook.nl") {
        console.log("fail");
        background.classList.add("hackerPic");
        alert("Dit was een slecht idee, ik had andere mensen moeten gebruiken.");
    } else {
        console.log("succes");
        background.classList.remove("hackerPic");
        typeWriter2();
    }
}
//Goede nummer invoeren!!!!!!!!!!!!!!!!!!!!!!!!
function checkAnswerPassword(){
    if(passwordField.value == "Welkom1!"){
        background.classList.remove("hackerPic");
        typeWriter3();
        console.log("Succes");
        background.classList.add("hackerPic");
    } else {
        console.log("fail");
        background.classList.add("hackerPic");
        alert("Misschien moet ik toch maar zelf hack- ach ik geef ze nog iets meer tijd.");
;    }
}



typeWriter();

nextButton.addEventListener("click", showEmail);
emailCheckButton.addEventListener("click", checkAnswerEmail);
finalButton.addEventListener("click", checkAnswerPassword);