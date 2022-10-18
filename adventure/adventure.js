// Imports
// import './auth/user.js';

import { getCoffeeShops, getActivities, getEateries, saveAdventure } from '../fetch-utils.js';
import { renderAdventure } from '../render-utils.js';
import { getRandomItem } from '../utils.js';

// DOM
const adventureDiv = document.getElementById('adventure-div');
const saveAdventureButton = document.getElementById('save-adventure-button');
// const displayError = document.getElementById('display-error');

// State
// let error = null;
let coffeeShops = [];
let eateries = [];
let activities = [];

let adventure = {
    coffeeShop: '',
    coffeeShopId: '',
    eatery: '',
    eateryId: '',
    activity: '',
    activityId: '',
};

// Events
window.addEventListener('load', async () => {
    const response = await getCoffeeShops();
    // error = response.error;
    coffeeShops = response.data;

    const coffeeShop = getRandomItem(coffeeShops);
    adventure.coffeeShop = coffeeShop.name;
    adventure.coffeeShopId = coffeeShop.id;

    const response1 = await getActivities();

    activities = response1.data;
    const activity = getRandomItem(activities);
    adventure.activity = activity.name;
    adventure.activityId = activity.id;

    const response2 = await getEateries();
    eateries = response2.data;

    const eatery = getRandomItem(eateries);
    adventure.eatery = eatery.name;
    adventure.eateryId = eatery.id;

    displayAdventure();
});

saveAdventureButton.addEventListener('click', async () => {
    const insertData = {
        coffee_id: adventure.coffeeShopId,
        activity_id: adventure.activityId,
        eatery_id: adventure.eateryId,
    };
    saveAdventure(insertData);
});

// Display functions
function displayAdventure() {
    adventureDiv.innerHTML = '';
    const adventureEl = renderAdventure(adventure);
    adventureDiv.append(adventureEl);
}
