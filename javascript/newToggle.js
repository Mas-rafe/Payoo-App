alert()
function showSection(sectionId){
    document.getElementById("addMoney").style.display = "none"
    document.getElementById("cashout").style.display = "none"
    document.getElementById("transfer").style.display = "none"
    document.getElementById("getBonus").style.display = "none"
    document.getElementById("payBill").style.display = "none"
    //document.getElementById("cashout").style.display = "none"

    document.getElementById(sectionId).style.display = "block"
}
document.getElementById("add-money").addEventListener('click',function(){
    showSection("addMoney")
})
document.getElementById("cashout").addEventListener('click',function(){
    showSection("addMoney")
})