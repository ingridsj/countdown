let dateInput = document.querySelector(".dateInput")
let startButton = document.querySelector(".startButton")

startButton.addEventListener("click", () => {

  let inputValue = new Date(dateInput.value.replace("-", ","))
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
   
    console.log({
      differenceInDays,
      differenceInHours,
      differenceInMinutes,
      differenceInSeconds
    })
   
  }, 1000);

  if(!dateInput.value){
    window.alert("Please enter a valid date.")
  } else {
    
  }

})


/* o que preciso fazer?
Ao clicar no botão, é preciso aparecer uma contagem
 regressiva mostrando Dias Horas Minutos Segundos
  
To Do:
[x] Referencia do input e botão
[x] Verificar se o value do input existe
[x] - Pegar valor do input
[x] - Transformar o valor em objeto de data 
[x] - Pegar data atual
[x] - Diminuir a data futura da atual
[x] - Descobrir quantos segundos de diferença entre uma data e outra
[x] - A cada 1 segundo atualizar o contador
[] - Esconder o input de inserir data e exibir apenas o contador
[] - Inserir o contador no HTML 
[] - Quando o contador zerar ele deve pausar e exibir um alerta
dentro do set interval a gnt vai pegar






*/