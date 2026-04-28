"use strict";

let currentTrees = 0;
let totalTrees = 0;
let clickPower = 1;
let clickMultiplier = 1;

const upgradePriceMultiplyer = 1.1;

const msg = "Cost: ";

const upgrades = [
  {
    cost: 25,
    amount: 0,
    power: 5,
    image: "assets/newlumber.jpg",
    costText: null,
    container: null,
  },
  {
    cost: 500,
    amount: 0,
    power: 50,
    image:
      "assets/chainsaw-man-the-movie-reze-arc-character-visuals-v0-66mz75zt7eqe1.webp",
    costText: null,
    container: null,
  },
  {
    cost: 2000,
    amount: 0,
    power: 200,
    image: "assets/treechomper.jpg",
    costText: null,
    container: null,
  },
  {
    cost: 10000,
    amount: 0,
    power: 1000,
    image: "assets/treecutternator.jpg",
    costText: null,
    container: null,
  },
];

function update$() {
  window.counterDisplay.innerText = `$: ${currentTrees}`;
}
function updateTital() {
  document.title = `ECS $${currentTrees} T${totalTrees}`;
}

window.onload = function () {
  window.counterDisplay = document.getElementById("counter");
  update$();

  upgrades.forEach((u, i) => {
    u.container = document.getElementById(`container${i + 1}`);
    u.costText = document.getElementById(`cost${i + 1}`);
    u.costText.innerText = `Cost: ${u.cost}`;
  });

  setInterval(upgradeTick, 1000);
  setInterval(updateTital, 10000);
};

function cutTree() {
  currentTrees += clickPower * clickMultiplier;
  totalTrees += clickPower * clickMultiplier;
  if (window.counterDisplay) {
    update$();
  }
}

function buyUpgrade(index) {
  const u = upgrades[index];
  if (currentTrees >= u.cost) {
    currentTrees -= u.cost;
    spawnImage(u.image, u.container);
    update$();
    u.amount += 1;
    u.cost = Math.round(u.cost * upgradePriceMultiplyer);
    u.costText.innerText = msg + u.cost;
  }
}

function spawnImage(image, container) {
  let Image = document.createElement("img");
  Image.src = image;
  Image.height = 50;
  Image.width = 50;
  Image.alt = "Upgrade Image";
  container.appendChild(Image);
}

function upgradeTick() {
  upgrades.forEach((u) => {
    currentTrees += u.power * u.amount;
    totalTrees += u.power * u.amount;
  });
  update$();
}
