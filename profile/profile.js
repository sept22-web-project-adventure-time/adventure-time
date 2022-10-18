// Imports
import '../auth/user.js';
import { updateProfile, getUser } from '../fetch-utils.js';

// DOM

const profileForm = document.getElementById('profile-form');
const errorDisplay = document.getElementById('error-display');
// const nameInput = profileForm.querySelector('[name=name]');
// const homeTown = profileForm.querySelector('[name=hometown]');
// const adventureQuote = profileForm.querySelector('[name=adventure-quote]');

// State
// let profile = null;
let error = null;
let user = getUser();

// Events
profileForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(profileForm);
    const profileUpdate = {
        id: user.id,
        name: formData.get('name'),
        hometown: formData.get('hometown'),
        adventure_quote: formData.get('adventure-quote'),
    };
    const response = await updateProfile(profileUpdate);
    error = response.error;

    if (error) {
        displayError();
    }
});
// Display
function displayError() {
    errorDisplay.textContent = error.message;
}
