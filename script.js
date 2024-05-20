let count = 0
const button = document.querySelector("#countButton")
const countDisplay = document.querySelector("#count")
countDisplay.innerHTML = 0
button.addEventListener("click", () => {
    count++
    countDisplay.innerHTML = count
})