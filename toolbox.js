export class Toolbox{
//gets a random number 0 --> array.length, given an array
getRandomIndex(array){
    return Math.floor(Math.random() * array.length);
}

//gets the item from that random index
getRandomItem(array){
    return array[this.getRandomIndex(array)];
}

//shuffles the array
shuffleArray (array){
    let shuffled = [];
    for(let i = array.length - 1; i >= 0; i--){
        let moveElement = this.getRandomIndex(array);
        shuffled.push(array[moveElement]);
        array.splice(moveElement, 1);
    }
    return shuffled;
}
}
