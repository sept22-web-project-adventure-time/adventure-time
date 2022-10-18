// Imports
import '../auth/user.js';
import { updateProfile, getUser, getProfile } from '../fetch-utils.js';

// DOM
const saveButton = document.getElementById('save-button');
const profileForm = document.getElementById('profile-form');
const errorDisplay = document.getElementById('error-display');
const nameInput = profileForm.querySelector('[name=name]');
const homeTown = profileForm.querySelector('[name=hometown]');
const adventureQuote = profileForm.querySelector('[name=adventure-quote]');

// State
let profile = null;
let error = null;
let user = getUser();

// Events
window.addEventListener('load', async () => {
    const response = await getProfile(user.id);
    // error = response.error;
    profile = response.data;

    if (error) {
        displayError();
    }
    if (profile) {
        displayProfile();
    }
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

function displayProfile() {
    if (profile) {
        nameInput.value = profile.name;
        homeTown.value = profile.hometown;
        adventureQuote.value = profile.adventure_quote;
    }
}
