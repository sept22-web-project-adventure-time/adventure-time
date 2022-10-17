// Imports
// import './auth/user.js';

import { getCoffeeShops, getActivities, getEateries } from '../fetch-utils.js';
import { renderAdventure } from '../render-utils.js';
import { getRandomItem } from '../utils.js';

// DOM

// const displayError = document.getElementById('display-error');

// State
// let error = null;
let coffeeShops = [];
let eateries = [];
let activities = [];

let adventures = [
    {
        coffeeShop: '',
        eatery: '',
        activity: '',
    },
];

// Events
window.addEventListener('load', async () => {
    const response = await getCoffeeShops();
    // error = response.error;
    coffeeShops = response.data;

    const coffeeShop = getRandomItem(coffeeShops);
    adventures.coffeeShop = coffeeShop;
    const response1 = await getActivities();

    activities = response1.data;
    const activity = getRandomItem(activities);
    adventures.activity = activity;

    const response2 = await getEateries();
    eateries = response2.data;

    const eatery = getRandomItem(eateries);
    adventures.eatery = eatery;

    renderAdventure(adventures);

    // console.log(coffeeShop);
    // console.log(activity);
    // console.log(eatery);
});

// Display functions
