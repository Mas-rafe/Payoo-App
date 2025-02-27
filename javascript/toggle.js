document.getElementById("addMoney").style.display = "none"
document.getElementById("cash-out").style.display = "none";

document.getElementById("add-money").addEventListener("click",function(){
    console.log("clicked")
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("addMoney").style.display = "block"
})
document.getElementById("cashout").addEventListener("click",function(){
    console.log("clicked")
    document.getElementById("cash-out").style.display = "block";
    document.getElementById("addMoney").style.display = "none"
})