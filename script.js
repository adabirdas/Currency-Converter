// app_id=f3f5763e6fe445f2ac094be41a028cf1")
// fetch("https://openexchangerates.org/api/latest.json?app_id=f3f5763e6fe445f2ac094be41a028cf1")
//   .then(response => {
//     // Parse the JSON response
//     return response.json();
    
    
//   })
//   .then(data => {
//     // Process the parsed JSON data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error('Error:', error);
//   });


const currencySelects = document.querySelectorAll(".main select")    // Assuming you have multiple select elements with id "from"
const userInput=document.querySelector(".input")
let fromImg=document.querySelector("#flagimg")
const button=document.querySelector(".button")
const text=document.querySelector("#innertext")


for (let select of currencySelects) {
  for (let cuucode in currency_converter) {
    let newOption = document.createElement("option");
    newOption.innerText = cuucode;
    newOption.value = cuucode;
    select.append(newOption);
    if(select.name==="from"&& cuucode==="USD"){
      newOption.selected="selected"
      const url= 'api.frankfurter.app';
      fetch(`https://${url}/latest?amount=1&from=USD&to=INR`)
        .then(responce => responce.json())
        .then((data) => {
          console.log(`1 USD = ${data.rates.INR} INR`);
          let firsttext=(`1 USD = ${data.rates.INR} INR`);
          text.innerText=firsttext
        });
        
        
    }else if(select.name==="to"&& cuucode==="INR"){
      newOption.selected="selected"
      
    }
  }
  button.addEventListener("click", () => {
    const fromCurrency = document.querySelector('select[name="from"]').value;
    const toCurrency = document.querySelector('select[name="to"]').value;
    const userInputValue = userInput.value.trim(); // Remove leading and trailing whitespace
  
    // Check if userInputValue is empty
    if (!userInputValue) {
      alert('Please enter a value');
      return; // Exit the function if userInputValue is empty
    }
  
    const url = 'api.frankfurter.app';
    fetch(`https://${url}/latest?amount=${userInputValue}&from=${fromCurrency}&to=${toCurrency}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        let newtext=(`${userInputValue} ${fromCurrency} = ${data.rates[toCurrency]} ${toCurrency}`);
        text.innerText=newtext
        if (userInput.value.length>17){
          
          text.innerText="The length of this number is too long"
          
        
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        alert('An error occurred while fetching data. Please try again later.');
      });
      
      
  });
 

  
    
    
    
    
  

  
  
    
  
    select.addEventListener("change",(element)=>{
      updateflag(element.target)

     

    })
  
    
    
  const updateflag=(element)=>{
    let cuucode=element.value
    let newOption=currency_converter[cuucode]
    let newimg=`https://flagsapi.com/${newOption}/shiny/64.png`
    let imgUrl=element.parentElement.querySelector("img")
    imgUrl.src=newimg
    


  }
}
button.addEventListener("click", () => {
if (userInput.value.length>17){
  alert("The length of this number is too long")
  text.innerText=""

}
})





 
  



  

    
  
 




  








