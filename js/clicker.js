let cookie = 0;
let man1Cost = 25;
let auto1Cost = 50;
let clickpower = 1;
let autopower = 0;
let stupid = true;

window.onload = function () {
    loadState();
    setInterval(auto, 1000);
    setInterval(saveState, 100);
    
}

function auto() {
    cookie += autopower;
    setScore(cookie);
}

function reset() {
    cookie = 0;
    man1Cost = 25;
    auto1Cost = 50;
    clickpower = 1;
    autopower = 0;
    setScore(cookie);
    setHTML("Manual Upgrade 1: 25", "man1");
    setHTML("Auto Upgrade 1: 50", "auto1");
}

function clickCookie() {
    stupid = true;
    cookie += clickpower;
    setScore(cookie);
}

function manualUpg1() {
    if (cookie >= man1Cost) {
        cookie -= man1Cost;
        clickpower += 1;
        man1Cost = Math.round(man1Cost *= 1.25);
        setScore(cookie);
        setHTML("Manual Upgrade 1: " + man1Cost, "man1");
    }
}

function autoUpg1() {
    if (cookie >= auto1Cost) {
        cookie -= auto1Cost;
        autopower += 1;
        auto1Cost = Math.round(auto1Cost *= 1.25);
        setScore(cookie);
        setHTML("Auto Upgrade 1: " + auto1Cost, "auto1");
    }
}

function loadState() {
    cookie = Number(localStorage.getItem("igscore"));
    man1Cost = Number(localStorage.getItem("igman1Cost"));
    auto1Cost = Number(localStorage.getItem("igauto1Cost"));
    clickpower = Number(localStorage.getItem("igclickpower"));
    autopower = Number(localStorage.getItem("igautopower"));
    stupid = localStorage.getItem("igstupid");
    setHTML("Manual Upgrade 1: " + man1Cost, "man1");
    setHTML("Auto Upgrade 1: " + auto1Cost, "auto1");
    setHTML(cookie, "score")
    if (stupid == true) {
        reset();
    }
}

function saveState() {
    localStorage.setItem("igscore", cookie);
    localStorage.setItem("igman1Cost", man1Cost);
    localStorage.setItem("igauto1Cost", auto1Cost);
    localStorage.setItem("igclickpower", clickpower);
    localStorage.setItem("igautopower", autopower);
    localStorage.setItem("igstupid", stupid)
}

function setScore(num) {
    document.getElementById("score").innerHTML = num;
}

function setHTML(str, id) {
    document.getElementById(id).innerHTML = str;
}
