// Imports
// import './auth/user.js';

import { getCoffeeShops } from '../fetch-utils.js';
import { getRandomItem } from '../utils.js';

// DOM

// const displayError = document.getElementById('display-error');

// State
// let error = null;
let coffeeShops = [];

// Events
window.addEventListener('load', async () => {
    const response = await getCoffeeShops();
    // error = response.error;
    coffeeShops = response.data;

    const coffeeShop = getRandomItem(coffeeShops);
});

// Display functions
