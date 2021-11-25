const billAmt = document.querySelector("#billAmt");
const checkBtn = document.querySelector("#checkBtn");
const cashGiven = document.querySelector("#cashGiven");
const errorMsg = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNote = [2000,500,200,100,50,20,10,5,2,1];

checkBtn.addEventListener("click", () => {
    hideMessage();

    if (billAmt.value > 0) {

        if (cashGiven.value >= billAmt.value) {
            const returnAmt = cashGiven.value - billAmt.value

            calculateChange(returnAmt)

        } else {
            if (!cashGiven.value) {
                showError("Please enter cash amount")
            } else {
                showError("Cash provided should be atleast be equal to bill amount")
            }
        }
    } else {
        showError("Invalid bill Amount")
    }

})

function calculateChange(returnAmt) {
    for(let i=0;i<availableNote.length;i++){
        const numberOfNotes = Math.trunc(returnAmt/availableNote[i]);

        returnAmt %= availableNote[i];
        
        noOfNotes[i].innerText=numberOfNotes;
    }
}

function hideMessage() {
    errorMsg.style.display = "none"
}

function showError(msg) {
    errorMsg.style.display = "block"
    errorMsg.innerText = msg
}