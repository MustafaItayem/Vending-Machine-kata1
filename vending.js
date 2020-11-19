var change = 0;
var moneyInserted = 0;
totalPaid = 0;

const currency_quarter = 0.25;
const currency_dime = 0.01;
const currency_nickel = 0.05;



function getTotal(){
    var currency_quarters = Number(document.getElementById("quarters").value);
    var currency_dimes = Number(document.getElementById("dimes").value);
    var currency_nickels = Number(document.getElementById("nickels").value);

    if(currency_quarters > 0 ) {
        currency_quarters = currency_quarters * currency_quarter;
    }
    if(currency_dimes > 0 ) {
        currency_dimes = currency_dimes * currency_dime;
    }
    if(currency_nickels > 0 ) {
        currency_nickels = currency_nickels * currency_nickel;
    }

totalPaid = currency_quarters + currency_dimes + currency_nickels;
return totalPaid.toFixed(2);
}