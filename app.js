const billAmt = document.querySelector("#billAmt");
const checkBtn = document.querySelector("#checkBtn");
const resetBtn = document.querySelector("#resetBtn");
const cashGiven = document.querySelector("#cashGiven");
const errorMsg = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNote = [2000,500,200,100,50,20,10,5,2,1];

resetBtn.addEventListener("click", () => {
    billAmt.value="";
    cashGiven.value="";
    showError("");
})
checkBtn.addEventListener("click", () => {
    hideMessage();

    const billAmount = parseInt(billAmt.value);

    if (billAmount > 0) {

        if (cashGiven.value >= billAmount) {
            const returnAmt = cashGiven.value - billAmount

            calculateChange(returnAmt)

        } else {
            if (!cashGiven.value) {
                showError("Please enter cash amount")
            } else {
                showError("Cash provided should be atleast equal to bill amount")
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
        if(numberOfNotes!==0)
        noOfNotes[i].innerText=numberOfNotes;
    }
}

function hideMessage() {
    errorMsg.style.display = "none"
}

function showError(msg) {
    errorMsg.style.display = "block"
    errorMsg.style.color="red";
    errorMsg.innerText = msg
}