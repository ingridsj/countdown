let dateInput = document.querySelector(".date-input")
let startButton = document.querySelector(".start-button")

startButton.addEventListener("click", () => {

   if(!dateInput.value){
    window.alert("Please enter a valid date.")
  } else {      
    localStorage.setItem("dateInput", dateInput.value)
    window.location = "../source/countdown.html"
  }
})