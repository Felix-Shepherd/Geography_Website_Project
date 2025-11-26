"use strict";

let currentTrees = 0;
let totalTrees = 0;
let clickPower = 100;
let clickMultiplier = 100;


const upgrade1Cost = 100;
const upgrade2Cost = 500;
const upgrade3Cost = 2000;
const upgrade4Cost = 10000;

let upgradeContainer1, upgradeContainer2, upgradeContainer3, upgradeContainer4;

window.onload = function() {
    const upgradeArea = document.getElementById("upgrades");
    window.counterDisplay = document.getElementById("counter");
    window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;

    upgradeContainer1 = document.getElementById("container1");
    upgradeContainer2 = document.getElementById("container2");
    upgradeContainer3 = document.getElementById("container3");
    upgradeContainer4 = document.getElementById("container4");
}

function cutTree() {
    currentTrees += clickPower * clickMultiplier;
    if (window.counterDisplay) {
        window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;
    }
}
function buyUpgrade1() {
    if (currentTrees >= upgrade1Cost) {
        currentTrees -= upgrade1Cost;
        spawnImage("assets/unnamed.jpg", upgradeContainer1)
        window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;
        console.log("Upgrade 1");
    }
}
function buyUpgrade2() {
    if (currentTrees >= upgrade2Cost) {
        currentTrees -= upgrade2Cost;
        spawnImage("assets/IMG_1314.jpeg", upgradeContainer2)
        window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;
        console.log("Upgrade 2");
    }
}
function buyUpgrade3() {
    if (currentTrees >= upgrade3Cost) {
        currentTrees -= upgrade3Cost;
        spawnImage("assets/Kasuga._Osaka_.Ayumu.600.880908.jpg", upgradeContainer3)
        window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;
        console.log("Upgrade 3");
    }
}
function buyUpgrade4() {
    if (currentTrees >= upgrade4Cost) {
        currentTrees -= upgrade4Cost;
        spawnImage("assets/avatars-000174359269-i8aoqr-t1080x1080.jpg", upgradeContainer4)
        window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;
        console.log("Upgrade 4");
    }
}

function spawnImage(image, container){
    let Image = document.createElement("img");
    Image.src = image;
    Image.alt = "Upgrade Image";
    container.appendChild(Image);
    console.log("Image spawned");
}

