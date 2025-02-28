document.getElementById("btn-add-money")
.addEventListener('click',function(event){
    event.preventDefault();
    const selectBank = document.getElementById("select-bank").value
    const amount = document.getElementById("add-amount").value
          const addAmount = parseFloat(amount); 
    const pin = document.getElementById("pin").value
          // const addPin = parseInt(pin);
    const balance = document.getElementById("balance")
    .innerText;
          const mainBalance = parseFloat(balance);
    const accNumber = document.getElementById("account-number").value
         // const accountNumber = parseInt(acNumber)
          
   if(selectBank && accNumber.length === 11){
       if(addAmount >= 500){
       
       
           if( pin.length === 4){ 
            const sum = addAmount+ mainBalance;
            document.getElementById("balance").innerText = sum;
            console.log(sum)
               
               
   }else {
       alert("need vlid pin")
   } 
       }else {
           alert("need valid amount")
   
       }  
         }else{
           alert("need valid bank / number")
         }
})

     
      
     
     