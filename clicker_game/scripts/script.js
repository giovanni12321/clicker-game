const tickRate = 1000 / 30; // 30 frames per second(fps)
let score = 0;

// Buildings are made from classes here.
// Building(name, clicks per second, base cost, button ID)
let grenades = new Building('grenades', 1, 150, 'buygrenades');
let Landmines = new Building('Land Mines', 10, 500, 'buyLandmines');
let Ballisticmissile = new Building('Ballistic missile', 100, 1500, 'buyBallisticmissile');
let Clusterbomb = new Building('Cluster Bomb', 250, 12000, 'buyClusterbomb');
let MOAB = new Building('M.O.A.B', 1000, 30000, 'buyMOAB');

// Manual click function
function scorePlusPlus() {
    score++;
}

// Increases the score by the current clicks-per-second
function incScore() {
    score += grenades.cps + Landmines.cps + Ballisticmissile.cps + Clusterbomb.cps + MOAB.cps;
}

// Updates the states of all the Building buttons
function updateButtons() {
    grenades.buttonState();
    Landmines.buttonState();
    Ballisticmissile.buttonState();
    Clusterbomb.buttonState();
    MOAB.buttonState();
}

// Everything in the following function updates every tick as set at the top
function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        Math.floor(score).toLocaleString();
}
setInterval(updatePage, tickRate);
