document.getElementById("btn-cashout").addEventListener('click',function(event){
    event.preventDefault();
    const number = document.getElementById("agent-number").value;
    //const agentNumber = parseInt(number);
    const amount = getInputValueById("amount");
    const pin = getInputValueById("input-pin");
    const balance = getInnerTextById("balance");
    

 if(number.length===11){
    if(amount){
        if(pin===1234){
            const sum = balance - amount;
            document.getElementById("balance").innerText = sum;

        }else{
            alert()
        }
 
    }else{
        alert("need amount")
    }
  
 }else{
    alert("need valid number")
 }
})     