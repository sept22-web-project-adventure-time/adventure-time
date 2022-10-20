export function renderAdventure(adventure) {
    const div = document.createElement('div');
    div.classList.add('adventure-container');

    const coffeeSection = document.createElement('section');
    coffeeSection.classList.add('coffee-section');
    const coffeeText = document.createElement('p');
    coffeeText.textContent = 'Grab your coffee at ';
    const coffee = document.createElement('h1');
    coffee.textContent = adventure.coffeeShop;
    coffeeSection.append(coffeeText, coffee);

    const activitySection = document.createElement('section');
    activitySection.classList.add('activity-section');
    const activityText = document.createElement('p');
    activityText.textContent = 'then ';
    const activity = document.createElement('h1');
    activity.textContent = adventure.activity;
    activitySection.append(activityText, activity);

    const eaterySection = document.createElement('section');
    eaterySection.classList.add('eatery-section');
    const eatery = document.createElement('h1');
    const eateryText = document.createElement('p');
    eateryText.textContent = 'and finish with a meal at ';
    eatery.textContent = adventure.eatery;
    eaterySection.append(eateryText, eatery);

    div.append(coffeeSection, activitySection, eaterySection);

    return div;
}

export function renderSavedAdventures(adventure) {
    const li = document.createElement('li');
    const coffeeIntro = document.createElement('span');
    coffeeIntro.textContent = 'Coffee at ';

    const coffeeShopEl = document.createElement('span');
    coffeeShopEl.textContent = adventure.coffee;
    coffeeShopEl.classList.add('bold');

    const activityIntro = document.createElement('span');
    activityIntro.textContent = ', ';

    const activityEl = document.createElement('span');
    activityEl.textContent = adventure.activity;
    activityEl.classList.add('bold');

    const eateryIntro = document.createElement('span');
    eateryIntro.textContent = ' & eat at ';

    const eateryEl = document.createElement('span');
    eateryEl.textContent = adventure.eatery;
    eateryEl.classList.add('bold');

    li.append(coffeeIntro, coffeeShopEl, activityIntro, activityEl, eateryIntro, eateryEl);
    return li;
}
