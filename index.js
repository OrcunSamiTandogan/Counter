let saveEl  = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let clearEl = document.getElementById("clear-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function clearX() { 
    clearEl.textContent = "Are you happy?" 
} 

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
} 
