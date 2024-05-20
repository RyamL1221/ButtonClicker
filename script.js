let count = 0
const button = document.querySelector("#countButton")
const countDisplay = document.querySelector("#count")
countDisplay.innerHTML = count
button.addEventListener("click", () => {
    count++
    countDisplay.innerHTML = count
})