const sessionLength = document.getElementById("session-length")
const breakLength = document.getElementById("break-length")
const timeLeft = document.getElementById("time-left")
const changeButtons = document.querySelectorAll(".change-btn")
const resetBtn = document.getElementById('reset')
const startStopBtn = document.getElementById('start-stop')

let hours = ''
let minutes = ''
let breakTime = ''
let sessionTime = ''
let countdown = false
let whichTimer = "session"

// setting onload properties
window.onload = () => {
    breakTime = 1
    sessionTime = 2
    breakLength.textContent = `${breakTime}`
    sessionLength.textContent = `${sessionTime}`
    minutes = sessionTime
    seconds = '00'
    timeLeft.innerText = `${minutes}:${seconds}`
    countdown = false
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
                minutes = sessionTime
                timeLeft.textContent = `${minutes}:${seconds}`
                break;

            case "session-decrement":
                sessionTime -= 1
                if (sessionTime <= 0) {
                    sessionTime = 0
                }
                sessionLength.textContent = `${sessionTime}`
                minutes = sessionTime
                timeLeft.textContent = `${minutes}:${seconds}`
                break;          
            
        }
    })
})

// reset button
resetBtn.addEventListener('click', () =>{
    breakTime = 1
    sessionTime = 2
    breakLength.textContent = `${breakTime}`
    sessionLength.textContent = `${sessionTime}`
    minutes = sessionTime
    seconds = '00'
    timeLeft.innerText = `${minutes}:${seconds}`
    countdown = false
})

// start stop button

startStopBtn.addEventListener("click", () => {
    if (countdown === false){
        countdown = true
    } else if (countdown === true) {
        countdown = false
    }

})

// countdown function

const count = () => {
    if (countdown === true) {
            seconds -= 1
            if (seconds < 10) {
                timeLeft.innerText = `${minutes}:0${seconds}`
            } else {
            timeLeft.innerText = `${minutes}:${seconds}`
            }

            if (seconds === 0 && minutes === 0) { 
                if (whichTimer === "session") {
                    whichTimer = "break"
                    minutes = breakTime

                } else if (whichTimer === "break") {
                    whichTimer = "session"
                    minutes = sessionTime
                }
            } else if (seconds <= 0){
                seconds = 60
                timeLeft.innerText = `${minutes}:00`
                minutes -= 1
            } 
        }
    }
        


let intervalId = setInterval(count, 50)


