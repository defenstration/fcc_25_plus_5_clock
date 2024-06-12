const sessionLength = document.getElementById("session-length")
const breakLength = document.getElementById("break-length")
const timeLeft = document.getElementById("time-left")
const changeButtons = document.querySelectorAll(".change-btn")
const resetBtn = document.getElementById('reset')
const startStopBtn = document.getElementById('start_stop')
const audio = document.getElementById('beep')
const sessionLabel = document.getElementById('timer-label')

let hours = ''
let minutes = ''
let breakTime = ''
let sessionTime = ''
let countdown = false
let whichTimer = "session"

// setting onload properties
window.onload = () => {
    breakTime = 5
    sessionTime = 25
    breakLength.textContent = `${breakTime}`
    sessionLength.textContent = `${sessionTime}`
    minutes = sessionTime
    seconds = 0
    timeLeft.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
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
                if (breakTime <= 1) {
                    breakTime = 1
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
                timeLeft.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
                break;

            case "session-decrement":
                sessionTime -= 1
                if (sessionTime <= 1) {
                    sessionTime = 1
                }
                sessionLength.textContent = `${sessionTime}`
                minutes = sessionTime
                timeLeft.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
                break;          
            
        }
    })
})

// reset button
resetBtn.addEventListener('click', () =>{
    breakTime = 5
    sessionTime = 25
    breakLength.textContent = `${breakTime}`
    sessionLength.textContent = `${sessionTime}`
    minutes = sessionTime
    seconds = '0'
    timeLeft.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    sessionLabel.textContent = "Session"
    countdown = false
    audio.pause()
    audio.currentTime = 0
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
            timeLeft.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

            if (seconds === 0 && minutes === 0) {
                audio.play() 
                if (whichTimer === "session") {
                    whichTimer = "break"
                    minutes = breakTime
                    sessionLabel.textContent = "Break"

                } else if (whichTimer === "break") {
                    whichTimer = "session"
                    minutes = sessionTime
                    sessionLabel.textContent = "Session"

                }

            } else if (seconds <= 0){
                seconds = 60
                timeLeft.innerText = `${minutes}:00`
                minutes -= 1
            } 
        }
    }
        


let intervalId = setInterval(count, 50)


