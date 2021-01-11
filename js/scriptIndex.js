let dateInput = document.querySelector(".dateInput")
let startButton = document.querySelector(".startButton")

startButton.addEventListener("click", () => {

   if(!dateInput.value){
    window.alert("Please enter a valid date.")
  } else {      
    localStorage.setItem("dateInput", dateInput.value)
    window.location = "../countdown.html"
  }
})