let inputDate = localStorage.getItem("dateInput")
let inputRestart = document.querySelector(".restart-button")

function countdown() {

  let inputValue = new Date(inputDate.replace("-", ","))
  let inputValueDays= inputValue.getDate()
  let inputValueHours = inputValue.getHours()
  let inputValueMinutes = inputValue.getMinutes()
  let inputValueSeconds = inputValue.getSeconds()
  
  setInterval(() => {
    let currentDate = new Date()
    let currentDay = currentDate.getDate()
    let currentHour = currentDate.getHours()
    let currentMin  = currentDate.getMinutes()
    let currentSec  = currentDate.getSeconds()
    

    let differenceInDays = Math.floor((inputValue - currentDate) / 1000 /60 /60 /24)
    let differenceInHours =  24  - currentHour 
    let differenceInMinutes =   60 - currentMin 
    let differenceInSeconds =  60 - currentSec 

    document.querySelector(".days").innerHTML = differenceInDays
    document.querySelector(".hours").innerHTML = differenceInHours
    document.querySelector(".minutes").innerHTML = differenceInMinutes
    document.querySelector(".seconds").innerHTML = differenceInSeconds
  }, 1000);

}
countdown()

document.querySelector(".restart-button").addEventListener("click", function returnHomePage(){
  window.location = "../source/index.html"
})