const SUPABASE_URL = 'https://jmrcnnpbxtcmnkrrltge.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptcmNubnBieHRjbW5rcnJsdGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMjY2NjksImV4cCI6MTk4MTYwMjY2OX0.ASGAnJldIXzH5t23Vvah5XvxOI9SHEFPxgXkDvZEck8';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
export async function getCoffeeShops() {
    return await client.from('coffee-shops').select('*');
}

export async function getActivities() {
    return await client.from('activities').select('*');
}

export async function getEateries() {
    return await client.from('eateries').select('*');
}

export async function saveAdventure(adventure, user_id) {
    return await client.from('saved-adventures').insert(adventure, user_id).single();
}

export async function updateProfile(profile) {
    return await client.from('profiles').upsert(profile).maybeSingle().eq('id', profile.id);
}

export async function getProfile(id) {
    return await client.from('profiles').select('*').eq('id', id).single();
}

export async function getSavedAdventures(user_id) {
    return await client.from('saved-adventures').select('*').eq('user_id', user_id);
}
