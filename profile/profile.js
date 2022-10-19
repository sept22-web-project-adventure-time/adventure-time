// Imports
import '../auth/user.js';
import {
    updateProfile,
    getUser,
    getProfile,
    getSavedAdventures,
    deleteSavedAdventures,
} from '../fetch-utils.js';
import { renderSavedAdventures } from '../render-utils.js';

// DOM
const saveButton = document.getElementById('save-button');
const profileForm = document.getElementById('profile-form');
const errorDisplay = document.getElementById('error-display');
const nameInput = profileForm.querySelector('[name=name]');
const homeTown = profileForm.querySelector('[name=hometown]');
const adventureQuote = profileForm.querySelector('[name=adventure-quote]');
const savedAdventuresList = document.getElementById('saved-adventures-display');

// State
let profile = null;
let error = null;
let user = getUser();
// let savedAdventures = [];

// Events
window.addEventListener('load', async () => {
    const response = await getProfile(user.id);
    profile = response.data;

    if (error) {
        displayError();
    }
    if (profile) {
        displayProfile();
    }

    const adventureList = await getSavedAdventures(user.id);
    displaySavedAdventures(adventureList);
});

profileForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    saveButton.disabled = true;
    saveButton.textContent = '';
    const formData = new FormData(profileForm);
    const profileUpdate = {
        id: user.id,
        name: formData.get('name'),
        hometown: formData.get('hometown'),
        adventure_quote: formData.get('adventure-quote'),
    };
    const response = await updateProfile(profileUpdate);
    error = response.error;

    saveButton.disabled = false;
    saveButton.textContent = 'Save';

    if (error) {
        displayError();
    }
});
// Display
function displayError() {
    errorDisplay.textContent = error.message;
}

export function displayProfile() {
    if (profile) {
        nameInput.value = profile.name;
        homeTown.value = profile.hometown;
        adventureQuote.value = profile.adventure_quote;
    }
}

export function displaySavedAdventures(adventureList) {
    for (let adventure of adventureList) {
        const savedAdventureEl = renderSavedAdventures(adventure);
        savedAdventuresList.append(savedAdventureEl);
    }
}
