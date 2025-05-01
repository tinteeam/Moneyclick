const MclickCounter = require('mclick-counter');

// Use MclickCounter for the main click counter
const counter = new MclickCounter();

let upgradeLevel = 0;
let upgradePrice = 10; // regular number
let clickValue = 1;

function click() {
    counter.increment(BigInt(clickValue));
    console.log(`Clicked! Count is now ${counter.format()}`);
}

function buyUpgrade() {
    if (counter.get() >= BigInt(upgradePrice)) {
        counter.set(counter.get() - BigInt(upgradePrice));
        upgradeLevel++;
        clickValue += 1;
        upgradePrice = Math.floor(upgradePrice * 1.5); // lowered multiplier
        console.log(`Upgrade bought! Click value: ${clickValue}, Next upgrade price: ${upgradePrice}`);
    } else {
        console.log(`Not enough clicks! You need ${upgradePrice - Number(counter.get())} more.`);
    }
}

// --- Example Simulation ---
click(); click(); click(); // 3 clicks
buyUpgrade(); // should fail
counter.increment(100n); // cheat in some clicks
buyUpgrade(); // should succeed
click(); click(); // more clicks
