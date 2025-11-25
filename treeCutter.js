"use strict";

let TreesCut = 0;

let clickPower = 1;
let clickMultiplier = 1;

const treeArea = Document.getElementById("treeArea");
const upgradeArea = Document.getElementById("upgrades");
const counterDisplay = Document.getElementById("counter");

function cutTree() {
    TreesCut += clickpwer * clickMultiplier;
    counterDisplay.innerText = `Trees Cut: ${TreesCut}`;
}