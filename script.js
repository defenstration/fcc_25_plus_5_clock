const sessionLength = document.getElementById("session-length")
const breakLength = document.getElementById("break-length")
const timeLeft = document.getElementById("time-left")
const changeButtons = document.querySelectorAll(".change-btn")

let hours = ''
let minutes = ''
let breakTime = ''
let sessionTime = ''

// setting onload properties
window.onload = () => {
    breakTime = 5
    sessionTime = 25
    breakLength.textContent = `${breakTime}`
    sessionLength.textContent = `${sessionTime}`
    seconds = '00'
    timeLeft.innerText = `${sessionTime}:${seconds}`
}

// event listeners for buttons

// increment and decrement buttons

changeButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {

        const btnId = event.target.id

        switch (btnId) {

            case "break-decrement":
                breakTime -= 1
                if (breakTime <= 0) {
                    breakTime = 0
                }
                breakLength.textContent = `${breakTime}`
                break;

            case "break-increment":
                breakTime += 1
                if (breakTime > 60) {
                    breakTime = 60
                }
                breakLength.textContent = `${breakTime}`
                break;

            case "session-increment":
                sessionTime += 1
                if (sessionTime > 60) {
                    sessionTime = 60
                }
                sessionLength.textContent = `${sessionTime}`
                timeLeft.textContent = `${sessionTime}:${seconds}`
                break;

            case "session-decrement":
                sessionTime -= 1
                if (sessionTime <= 0) {
                    sessionTime = 0
                }
                sessionLength.textContent = `${sessionTime}`
                timeLeft.textContent = `${sessionTime}:${seconds}`
                break;          
            
        }
    })
})