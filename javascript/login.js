//button login
document.getElementById("btn-login")
.addEventListener('click',function(event){
    event.preventDefault();
    const inputNum = document.getElementById("input-num").
    value;
    const inputText = document.getElementById("input-text").
    value;
    //const newInputText = parseInt(inputText);
    if(inputNum.length >= 5 && inputNum.length <= 10){
       if(inputText.length === 4){
        window.location.href="./main.html"
        //console.log("you are welcome");
       }
       else {
        alert("need valid pin ");
       }
    }
    else{
        alert("need valid mobile number ");
    }
    })
