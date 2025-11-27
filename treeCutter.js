"use strict";

let currentTrees = 0;
let totalTrees = 0;
let clickPower = 1;
let clickMultiplier = 1;

const upgradePriceMultiplyer = 1.1

let upgrade1Cost = 25;
let upgrade2Cost = 500;
let upgrade3Cost = 2000;
let upgrade4Cost = 10000;

let upgrade1ammount = 0;
let upgrade2ammount = 0;
let upgrade3ammount = 0;
let upgrade4ammount = 0;

let upgrade1Power = 5;
let upgrade2Power = 50;
let upgrade3Power = 200;
let upgrade4Power = 1000;

let cost1text, cost2text, cost3text, cost4text;
let upgradeContainer1, upgradeContainer2, upgradeContainer3, upgradeContainer4;

window.onload = function() {
    window.counterDisplay = document.getElementById("counter");
    window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;

    upgradeContainer1 = document.getElementById("container1");
    upgradeContainer2 = document.getElementById("container2");
    upgradeContainer3 = document.getElementById("container3");
    upgradeContainer4 = document.getElementById("container4");

    cost1text = document.getElementById("cost1")
    cost2text = document.getElementById("cost2")
    cost3text = document.getElementById("cost3")
    cost4text = document.getElementById("cost4") 

    cost1text.innerText = `Cost: ${upgrade1Cost}`;
    cost2text.innerText = `Cost: ${upgrade2Cost}`;
    cost3text.innerText = `Cost: ${upgrade3Cost}`;
    cost4text.innerText = `Cost: ${upgrade4Cost}`;

    setInterval(upgrade1Tick, 1000);
    setInterval(upgrade2Tick, 1000);
    setInterval(upgrade3Tick, 1000);
    setInterval(upgrade4Tick, 1000);
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
        spawnImage("assets/newlumber.jpg", upgradeContainer1)
        window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;
        upgrade1ammount += 1;
        upgrade1Cost *= upgradePriceMultiplyer
        upgrade1Cost = Math.round(upgrade1Cost, 0)
        cost1text.innerText = upgrade1Cost
    }
}
function buyUpgrade2() {
    if (currentTrees >= upgrade2Cost) {
        currentTrees -= upgrade2Cost;
        spawnImage("assets/chainsaw-man-the-movie-reze-arc-character-visuals-v0-66mz75zt7eqe1.webp", upgradeContainer2)
        window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;
        upgrade2ammount += 1;
        upgrade2Cost *= upgradePriceMultiplyer
        upgrade2Cost = Math.round(upgrade2Cost, 0)
        cost2text.innerText = upgrade2Cost
    }
}
function buyUpgrade3() {
    if (currentTrees >= upgrade3Cost) {
        currentTrees -= upgrade3Cost;
        spawnImage("assets/treechomper.jpg", upgradeContainer3)
        window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;
        upgrade3ammount += 1
        upgrade3Cost *= upgradePriceMultiplyer
        upgrade3Cost = Math.round(upgrade3Cost, 0)
        cost3text.innerText = upgrade3Cost
    }
}
function buyUpgrade4() {
    if (currentTrees >= upgrade4Cost) {
        currentTrees -= upgrade4Cost;
        spawnImage("assets/treecutternator.jpg", upgradeContainer4)
        window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;
        upgrade4ammount += 1;
        upgrade4Cost *= upgradePriceMultiplyer
        upgrade4Cost = Math.round(upgrade4Cost, 0)
        cost4text.innerText = upgrade4Cost
    }
}

function spawnImage(image, container){
    let Image = document.createElement("img");
    Image.src = image;
    Image.height = 50
    Image.width = 50
    Image.alt = "Upgrade Image";
    container.appendChild(Image);
}

function upgrade1Tick(){
    currentTrees += upgrade1Power * upgrade1ammount;
    window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;
}
function upgrade2Tick(){
    currentTrees += upgrade2Power * upgrade2ammount;
    window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;
}
function upgrade3Tick(){
    currentTrees += upgrade3Power * upgrade3ammount;
    window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;
}
function upgrade4Tick(){
    currentTrees += upgrade4Power * upgrade4ammount;
    window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;
}
