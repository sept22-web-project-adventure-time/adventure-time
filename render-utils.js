export function renderAdventure(adventure) {
    const div = document.createElement('div');
    div.classList.add('adventure-container');

    const coffeeSection = document.createElement('section');
    const coffee = document.createElement('h1');
    coffee.textContent = adventure.coffeeShop;
    coffeeSection.append(coffee);

    const activitySection = document.createElement('section');
    const activity = document.createElement('h1');
    activity.textContent = adventure.activity;
    activitySection.append(activity);

    const eaterySection = document.createElement('section');
    const eatery = document.createElement('h1');
    eatery.textContent = adventure.eatery;
    eaterySection.append(eatery);

    div.append(coffeeSection, activitySection, eaterySection);

    return div;
}
