
const container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

function buy() {
    container.innerHTML += "<p>Than you for buying!</p>"
}