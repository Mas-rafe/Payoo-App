document.getElementById("addMoney").style.display = "none"
document.getElementById("cash-out").style.display = "none";
document.getElementById("transfer-money").style.display = "none"
document.getElementById("getBonus").style.display = "none"
document.getElementById("payBill").style.display = "none"
document.getElementById("transfer-money").style.display = "none"

document.getElementById("add-money").addEventListener('click',function(){
    console.log("clicked")
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("addMoney").style.display = "block"
    document.getElementById("transfer-money").style.display = "none"

})
document.getElementById("cashout").addEventListener('click',function(){
    console.log("clicked")
    document.getElementById("cash-out").style.display = "block";
    document.getElementById("addMoney").style.display = "none"
    document.getElementById("transfer-money").style.display = "none"

})
document.getElementById("transfer").addEventListener('click',function(){
    console.log("clicked")
    document.getElementById("transfer-money").style.display = "block";
    document.getElementById("addMoney").style.display = "none"
    document.getElementById("cash-out").style.display = "none"

})
