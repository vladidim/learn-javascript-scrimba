// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let arrStr = ""
    for (let i = 0; i < arr.length; i++) {
        arrStr = arrStr + `${arr[i]}, `
    }

    arrStr = arrStr.slice(0, -2).concat(".")

    let result = `The ${arr.length} ${desc} are ${arrStr}`
    console.log(result)
}

const descr = "largest countries"
const info = ["Russia", "Brazil", "Canada"]

generateSentence(descr, info)

// second solution
function generateSentence2(desc, arr) {
    let baseStr = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseStr += arr[i]
        } else {
            baseStr += arr[i] + ", "
        }
    }

}