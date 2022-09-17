const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#btnCheck");
const errorMessage = document.querySelector("#error-message");
const quantityOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];



checkBtn.addEventListener("click", validateBillAmount);
 
function validateBillAmount() {

    const BillAmount = Number(billAmount.value );
    const CashGiven =Number(cashGiven.value);

    if(BillAmount=="" || CashGiven=="" ){

        showMessage("Enter all the fields");
        
    }

    else if(BillAmount<=0|| CashGiven<=0 ){

        showMessage("Please Enter Positive and Non-Zero Values");
        
    }


    else{
        if (BillAmount > 0) {

            if (CashGiven>= BillAmount) {
                
    
                const balanceAmount = CashGiven- BillAmount;
                calculateChange(balanceAmount);
                showMessage("");
            }   
             
        } 
        else if(BillAmount<=0) {
            showMessage("Invalid Bill Amount!!!!");
    
        }
        
    }

    
    
}

function calculateChange(balanceAmount) {
    for (let i = 0; i < availableNotes.length; i++) {
        const noteQuantity = Math.trunc(balanceAmount / availableNotes[i]);
        balanceAmount = balanceAmount % availableNotes[i];
        quantityOfNotes[i].innerText = noteQuantity;
    }

}

function showMessage(msg) {
    errorMessage.innerText = msg;
}