export function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}

export function getRandomItem(array) {
    const random = getRandomNumber(array.length);
    const item = array[random];
    return item;
}
