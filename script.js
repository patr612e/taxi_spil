//alert("yolo")


window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    // nulstil alting
    showStart();

}


function showStart() {
    console.log("showStart");
    // vis startskærm
    document.querySelector("#start").classList.add("show");
    // start animation på start/settings-knap
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#settings_knap").classList.add("pulse");

    //document.querySelector("#play").addEventListener

    document.querySelector("#play").addEventListener("click", hideStart);
}


function hideStart() {
    console.log("hideStart");
    // stop animation på start/settings knap
    document.querySelector("#play").classList.remove("pulse")
    document.querySelector("#settings_knap").classList.remove("pulse");
    // fade startskærm ud
    document.querySelector("#start").classList.add("fade_out")

    document.querySelector("#start").addEventListener("animationend", startGame);
}


function startGame() {
    console.log("startGame");
    // skjul startskærm
    document.querySelector("#start").classList.add("hide")
    document.querySelector("#start").classList.remove("show")
    // vis spilskærm
    document.querySelector("#game").classList.add("show");

    document.querySelector("#bil_taxi").addEventListener("click", clickTaxi);
    document.querySelector("#bil_kloakmanden").addEventListener("click", clickKloakmanden);
    document.querySelector("#bil_rod").addEventListener("click", clickRod);
    document.querySelector("#bil_gron").addEventListener("click", clickGron);
    document.querySelector("#bil_blaa").addEventListener("click", clickBlaa);
    document.querySelector("#bil_gul").addEventListener("click", clickGul);
    document.querySelector("#bil_hippie").addEventListener("click", clickHippie);
}


let point = 0;

function clickTaxi() {
    console.log("clickTaxi")
    point++;
    console.log(point);
}

function clickKloakmanden() {
    console.log("clickKloakmanden")
    point--;
    console.log(point);
}

function clickRod() {
    console.log("clickRod")
    point--;
    console.log(point);
}

function clickGron() {
    console.log("clickGron")
    point--;
    console.log(point);
}

function clickBlaa() {
    console.log("clickBlaa")
    point--;
    console.log(point);
}

function clickGul() {
    console.log("clickGul")
    point--;
    console.log(point);
}

function clickHippie() {
    console.log("clickHippie")
    point++;
    console.log(point);
}
