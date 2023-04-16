console.log("test linking");

var nextButton = document.querySelector("#knop1");
var tekst2 = document.querySelector("#tekst2");
var passwordButton = document.querySelector("#knop2");
var tekst3 = document.querySelector("#tekst3");

nextButton.addEventListener("click", test)
passwordButton.addEventListener("click", password)

function test() {
    console.log("nextButton");
    tekst2.classList.remove("hidden");
    passwordButton.classList.remove("hidden");
}

function password() {
    console.log("password correct")
    tekst3.classList.remove("hidden");
}



