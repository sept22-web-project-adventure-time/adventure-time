export function renderAdventure(adventure) {
    const li = document.createElement('li');
    li.classList.add('adventure-container');

    const coffee = document.createElement('h2');
    coffee.textContent = adventure.coffeeShop;
    console.log(adventure);
}
