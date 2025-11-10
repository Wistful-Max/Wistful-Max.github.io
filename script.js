let counter = 0;
let goldAmount = 50;
let troopAmount = 0;
let manyMines = 0;
let roundNM = 0;
let enemies = 10;
let HP = 100;
let bulk = false;

function klick() {
  counter = counter + 1;
  updateUI();
}
function updateUI() {
  document.getElementById("counter").textContent = counter;
}

/*------------- troops ----------*/
function troop() {
  if (goldAmount >= 2) {
    troopAmount = troopAmount + 1;
    goldAmount = goldAmount - 2;
    updateMines();
  } else {
    alert("You don't have any money");
  }
  updateTroop();
  updateGold();
}

function updateTroop() {
  document.getElementById("troopAmount").textContent = troopAmount;
}

/*----------- gold mine ----------*/
function mine() {
  if (goldAmount >= 2) {
    manyMines = manyMines + 1;
    price();
    updateMines();
  } else {
    alert("You don't have any money");
  }
}

function updateMines() {
  document.getElementById("manyMines").textContent = manyMines;
}

/*-------------- Skill tree -------*/
function uppgrade1() {
  document.getElementById("tenx").style.display = "block";
  bulk = true;
}

/*-------------- HP -----------*/
function updateHP() {
  document.getElementById("health").textContent = HP;
}
/*--------------price -----------*/
function price() {
  goldAmount = goldAmount - 2;
  updateGold();
}

/*------------- gold ------------*/
function gold() {
  goldAmount = goldAmount + manyMines;
  updateGold();
}
function updateGold() {
  document.getElementById("goldAmount").textContent = goldAmount;
}
/*--------- 10 soldiers -----------*/
function tens() {
  if (goldAmount < 8) {
    alert("You do not have the funds.");
  } else {
    troopAmount = troopAmount + 10;
    goldAmount = goldAmount - 8;
    updateGold();
    updateTroop();
  }
}
/*--------- new round ------------*/
function newRound() {
  roundNM = roundNM + 1;
  gold();
  updateRound();
  fight();
  if (troopAmount < 0) {
    troopAmount = 0;
    updateTroop();
  }
  if (HP <= 0) {
    window.location.replace("index.html");
  }
}
function updateRound() {
  document.getElementById("roundNM").textContent = roundNM;
}

/*--------- enemies -------------*/
function fight() {
  troopAmount = troopAmount - enemies;
  if (troopAmount < 0) {
    HP = HP + troopAmount;
  }
  updateTroop();
  updateHP();
}
