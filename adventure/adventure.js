// Imports
// import './auth/user.js';

import { getCoffeeShops, getActivities, getEateries } from '../fetch-utils.js';
import { renderAdventure } from '../render-utils.js';
import { getRandomItem } from '../utils.js';

// DOM
const adventureDiv = document.getElementById('adventure-div');
// const displayError = document.getElementById('display-error');

// State
// let error = null;
let coffeeShops = [];
let eateries = [];
let activities = [];

let adventure = {
    coffeeShop: '',
    eatery: '',
    activity: '',
};

// Events
window.addEventListener('load', async () => {
    const response = await getCoffeeShops();
    // error = response.error;
    coffeeShops = response.data;

    const coffeeShop = getRandomItem(coffeeShops);
    adventure.coffeeShop = coffeeShop.name;

    const response1 = await getActivities();

    activities = response1.data;
    const activity = getRandomItem(activities);
    adventure.activity = activity.name;

    const response2 = await getEateries();
    eateries = response2.data;

    const eatery = getRandomItem(eateries);
    adventure.eatery = eatery.name;

    displayAdventure();
});

// Display functions
function displayAdventure() {
    adventureDiv.innerHTML = '';
    const adventureEl = renderAdventure(adventure);
    adventureDiv.append(adventureEl);
}
