//alert("yolo")

"use strict";
let score_tal = 0;

let showSettingsEffektSound = true;
let showSettingsMusic = true;


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

    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", startGame);
}

// STARTSKÆRM SLUT




// SETTINGSSKÆRM


function showSettings() {
    console.log("showSettings");

    document.querySelector("#settings_screen").classList.remove("hide");

    document.querySelector("#play").classList.remove("show");
    document.querySelector("#settings_knap").classList.remove("show");
    document.querySelector("#play").classList.add("hide");
    document.querySelector("#settings_knap").classList.add("hide");

    document.querySelector("#settings_back").addEventListener("click", hideSettings);

    document.querySelector("#settings_music").addEventListener("click", toggleMusic);

    document.querySelector("#settings_sfx").addEventListener("click", toggleSounds);

}

function hideSettings() {
    console.log("hideSettings");
    document.querySelector("#settings_screen").classList.add("hide");
    document.querySelector("#start").classList.add("show");

    document.querySelector("#play").classList.add("show");
    document.querySelector("#settings_knap").classList.add("show");

}

function toggleSounds() {

    console.log("toggle sounds")

    if (showSettingsEffektSound == true) {
        showSettingsEffektSound = false;
        document.querySelector("#settings_sfx").classList.add("off_sfx");
        document.querySelector("#settings_sfx").classList.remove("on_sfx");
        soundsOff();


    } else {
        (showSettingsEffektSound) = true;
        document.querySelector("#settings_sfx").classList.add("on_sfx");
        document.querySelector("#settings_sfx").classList.remove("off_sfx");
        soundsOn();

    }
}

function soundsOff() {

    console.log("sounds off");

    document.querySelector("#settings_sfx").classList.add("off_sfx");
    document.querySelector("#settings_sfx").classList.remove("on_sfx");

    document.querySelector("#aeble").muted = true;
    document.querySelector("#dyt").muted = true;

}


function soundsOn() {

    console.log("sounds on");

    document.querySelector("#settings_sfx").classList.add("on_sfx");
    document.querySelector("#settings_sfx").classList.remove("off_sfx");

    document.querySelector("#aeble").muted = false;
    document.querySelector("#dyt").muted = false;

}


function toggleMusic() {

    console.log("toggle music")


    if (showSettingsMusic == true) {
        showSettingsMusic = false;
        document.querySelector("#settings_music").classList.add("off_music");
        document.querySelector("#settings_music").classList.remove("on_music");
        musicOff();


    } else {
        showSettingsMusic = true;
        document.querySelector("#settings_music").classList.add("on_music");
        document.querySelector("#settings_music").classList.remove("off_music")
        musicOn();
    }

}


function musicOff() {

    console.log("music off");

    document.querySelector("#settings_music").classList.add("off_music");
    document.querySelector("#settings_music").classList.remove("on_music");

    document.querySelector("#street_music").muted = true;

}

function musicOn() {

    console.log("music on");

    document.querySelector("#settings_music").classList.add("on_music");
    document.querySelector("#settings_music").classList.remove("off_music")

    document.querySelector("#street_music").muted = false

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

    document.querySelector("#street_music").play();
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

    document.querySelector("#dyt").play();
    document.querySelector("#dyt").currentTime = 0;

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

    document.querySelector("#aeble").play();
    document.querySelector("#aeble").currentTime = 0;
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

    document.querySelector("#aeble").play();
    document.querySelector("#aeble").currentTime = 0;

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

    document.querySelector("#aeble").play();
    document.querySelector("#aeble").currentTime = 0;
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

    document.querySelector("#aeble").play();
    document.querySelector("#aeble").currentTime = 0;
}


function clickBlaa() {
    console.log("clickBlaa")
    point--;
    console.log(point);
}
