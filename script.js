//alert("yolo")

"use strict";
let score_tal = 0;


window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    // nulstil alting
    showStart();

}


// STARTSKÆRM


function showStart() {
    console.log("showStart");
    // vis startskærm
    document.querySelector("#start").classList.add("show");
    // start animation på start/settings-knap
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#settings_knap").classList.add("pulse");

    document.querySelector("#play").addEventListener("click", hideStart);
    document.querySelector("#settings_knap").addEventListener("click", showSettings);
}


function hideStart() {
    console.log("hideStart");

    document.querySelector("#start").classList.add("fade_out")

    document.querySelector("#start").addEventListener("animationend", startGame);
}

// STARTSKÆRM SLUT

// SETTINGSSKÆRM


function showSettings() {
    console.log("showSettings");
    document.querySelector("#start").classList.add("hide")
    document.querySelector("#start").classList.remove("show")
    document.querySelector("#game").classList.add("hide")
    document.querySelector("#settings").classList.add("show")

    document.querySelector("#back").addEventListener("click", hideSettings)

}

function hideSettings() {
    console.log("hideSettings");
    document.querySelector("#settings").classList.add("fade_out")
    document.querySelector("#settings").addEventListener("animationend", showStart)
}


//SETTINGSSKÆRM SLUT

//SPILSKÆRM

function startGame() {
    console.log("startGame");
    // skjul startskærm
    document.querySelector("#start").classList.add("hide")
    document.querySelector("#start").classList.remove("show")
    // vis spilskærm
    document.querySelector("#game").classList.add("show");

    document.querySelector("#bil_taxi").addEventListener("click", clickTaxi);
    document.querySelector("#bil_kloakmanden").addEventListener("click", clickKloakmanden);
    document.querySelector("#bil_hippie").addEventListener("click", clickHippie);
    document.querySelector("#bil_gron").addEventListener("click", clickGron);
    document.querySelector("#bil_gul").addEventListener("click", clickGul);
    document.querySelector("#bil_blaa").addEventListener("click", clickBlaa);
    document.querySelector("#bil_rod").addEventListener("click", clickRod);
}



function clickTaxi() {
    console.log("clickTaxi")
    score_tal++;
    console.log(score_tal);
    document.querySelector("#score_tal").innerHTML = score_tal;

    console.log(this)
    let myNumber = Math.floor((Math.random() * 2) + 1);
    console.log("tilfældigt tal: " + myNumber)

    this.classList = "taxi taxi_korer" + myNumber;

}

function clickKloakmanden() {
    console.log("clickKloakmanden")
    score_tal--;
    console.log(score_tal);
    document.querySelector("#score_tal").innerHTML = score_tal;

    console.log(this)
    let myNumber = Math.floor((Math.random() * 2) + 1);
    console.log("tilfældigt tal: " + myNumber)

    this.classList = "kloakmanden kloakmanden_korer" + myNumber;
}

function clickHippie() {
    console.log("clickHippie")
    score_tal++;
    console.log(score_tal);
    document.querySelector("#score_tal").innerHTML = score_tal;

    console.log(this)
    let myNumber = Math.floor((Math.random() * 2) + 1);
    console.log("tilfældigt tal: " + myNumber)

    this.classList = "hippie hippie_korer" + myNumber;
}

function clickGron() {
    console.log("clickGron")
    score_tal--;
    console.log(score_tal);

    document.querySelector("#score_tal").innerHTML = score_tal;

    console.log(this)
    let myNumber = Math.floor((Math.random() * 2) + 1);
    console.log("tilfældigt tal: " + myNumber)

    this.classList = "gron gron_korer" + myNumber;

}

function clickGul() {
    console.log("clickGul")
    score_tal--;
    console.log(score_tal);

    document.querySelector("#score_tal").innerHTML = score_tal;

    console.log(this)
    let myNumber = Math.floor((Math.random() * 2) + 1);
    console.log("tilfældigt tal: " + myNumber)

    this.classList = "gul gul_korer" + myNumber;
}

function clickRod() {
    console.log("clickRod")
    score_tal--;
    console.log(score_tal);

    document.querySelector("#score_tal").innerHTML = score_tal;

    console.log(this)
    let myNumber = Math.floor((Math.random() * 2) + 1);
    console.log("tilfældigt tal: " + myNumber)

    this.classList = "rod rod_korer" + myNumber;
}


function clickBlaa() {
    console.log("clickBlaa")
    point--;
    console.log(point);
}
