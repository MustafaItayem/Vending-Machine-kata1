var change = 0;
var moneyInserted = 0;
var msg = "";
var items = ["Cola", "Chips", "Candy"];
const price  = 1.00;
// var chips = ["Chips"];
// const price  = 0.50;
// var candy = ["Candy"];
// const price  = 0.65;
var messageEL = document.getElementById("message");

var totalPaid = 0;



const currency_quarter = 0.25;
const currency_dime = 0.01;
const currency_nickel = 0.05;



function getTotal() {
    var currency_quarters = Number(document.getElementById("quarters").value);
    var currency_dimes = Number(document.getElementById("dimes").value);
    var currency_nickels = Number(document.getElementById("nickels").value);

    if (currency_quarters > 0) {
        currency_quarters = currency_quarters * currency_quarter;
    }
    if (currency_dimes > 0) {
        currency_dimes = currency_dimes * currency_dime;
    }
    if (currency_nickels > 0) {
        currency_nickels = currency_nickels * currency_nickel;
    }

    totalPaid = currency_quarters + currency_dimes + currency_nickels;
    return totalPaid.toFixed(2);
}
function tally() {
    moneyInserted = getTotal();
    document.getElementById("paid").innerHTML = moneyInserted;
}
function clearTally() {
    moneyInserted = 0;
    document.getElementById("paid").innerHTML = moneyInserted;
}

function clearForm() {
    document.getElementById("nickels").value = 0;
    document.getElementById("dimes").value = 0;
    document.getElementById("quarters").value = 0;

}
function cancel() {
    getTotal();

    if(totalPaid > 0){
        msg = "Transaction Cancelled. $" + totalPaid.toFixed(2) + " has been returned."
        clearForm();
        clearTally();
    messageEL.innerHTML = msg;
    }else if (totalPaid == 0){
        msg = "Insert money first. select an item."

        messageEL.innerHTML = msg;

    }
    
} 

function calChange(){
    var tempChange = 0;


    if(getTotal() != 0){
        return (tempChange = (getTotal() - price).toFixed(2));
    
    }
return tempChange.toFixed(2);

}

function dispenseItems(items) {
    messageEL.innerHTML = "";
    change = 0;

    var selectedItems = items[items];


    change = calChange();

    if (change < 0){
        msg = "You did not pay enough. $" + totalPaid.toFixed(2) + " has been returend to the coin return"
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEL.innerHTML = msg;
    }else if (change > 0){
        msg = selectedItems + " has been dispensed. $" + change + " has been returned to the cain return."
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEL.innerHTML = msg;
    }


}