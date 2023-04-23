// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

function error() {
    let errEl = document.getElementById("error")
    errEl.textContent = "Something went wrong, please try again"
}
