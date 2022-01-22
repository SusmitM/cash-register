const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn= document.querySelector("#btnCheck");
const errorMessage=document.querySelector("#error-message")

checkBtn.addEventListener("click", function check(){
    console.log(billAmount.value);
    console.log(cashGiven.value);
});


