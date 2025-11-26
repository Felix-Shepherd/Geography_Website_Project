"use strict";

let currentTrees = 0;
let totalTrees = 0;
let clickPower = 1;
let clickMultiplier = 1;

window.onload = function() {
    const treeArea = document.getElementById("treeArea");
    const upgradeArea = document.getElementById("upgrades");
    window.counterDisplay = document.getElementById("counter");
    window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;
}

function cutTree() {
    currentTrees += clickPower * clickMultiplier;
    if (window.counterDisplay) {
        window.counterDisplay.innerText = `Trees Cut: ${currentTrees}`;
    }
}