// Imports
import '../auth/user.js';
import { updateProfile } from '../fetch-utils.js';

// DOM
const profileForm = document.getElementById('profile-form');
const nameInput = profileForm.querySelector('[name=name]');
const homeTown = profileForm.querySelector('[name=hometown]');
const adventureQuote = profileForm.querySelector('[name=adventure-quote]');

// State
let profile = null;

// Events
profileForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(profileForm);
    const profileUpdate = {
        name: formData.get('name'),
        hometown: formData.get('hometown'),
        adventure_quote: formData.get('adventure-quote'),
    };
});
// Display
