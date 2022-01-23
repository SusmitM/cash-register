const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn= document.querySelector("#btnCheck");
const errorMessage=document.querySelector("#error-message")
checkBtn.addEventListener("click", function check(){
    if(billAmount.value>0){
   if (cashGiven.value>0){
       if(cashGiven.value>= billAmount.value){
        
           const balanceAmount = cashGiven.value - billAmount.value;
           calculateChange(balanceAmount);
       }
       else{
           showMessage("Cash given should be greater than the bill");
       }
   }
   else{
       showMessage("Cash given should be greater than 0");
   }
}
else{
    showMessage("Bill Amount should be greater than 0");

}
});
function calculateChange(balanceAmount){

};
function showMessage(msg){
    errorMessage.innerText= msg;
}


