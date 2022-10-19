/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';

/* Get DOM Elements */
const adventureButton = document.getElementById('adventure-button');

/* State */

/* Events */
adventureButton.addEventListener('click', () => {
    window.location.assign('/adventure');
});

/* Display Functions */
