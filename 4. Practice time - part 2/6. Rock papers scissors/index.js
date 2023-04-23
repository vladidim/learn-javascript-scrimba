let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function random() {
    let randomNum = Math.floor(Math.random() * 3)
    console.log(hands[randomNum])
}

random()

for (i = 0; i < 10; i++) {
    random()
}