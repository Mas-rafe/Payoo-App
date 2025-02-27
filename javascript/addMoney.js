document.getElementById("btn-add-money")
.addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById("add-amount").value
    const addAmount = parseFloat(amount); 
    const pin = document.getElementById("pin").value
          const addPin = parseInt(pin);
    const balance = document.getElementById("balance")
    .innerText;
          const mainBalance = parseFloat(balance);
    if(addAmount && addPin){

        if( pin.length === 4){
        const sum = addAmount + mainBalance;
        document.getElementById("balance").innerText =sum
        console.log(sum)
        }
        else{
             console.log("need valid pin")
        } 
    }
    else{
        console.log("enter amount")
    }

    window.location.href
})
    


