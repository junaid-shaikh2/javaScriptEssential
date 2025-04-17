let amount;
let amount2;
let amount3;

function cal_grocery(){
    amount = parseFloat(document.getElementById("amount").value)
    amount2 = parseFloat(document.getElementById("amount2").value)
    amount3 = parseFloat(document.getElementById("amount3").value)
    let result = amount + amount2 + amount3;
    document.getElementById("result").innerText = "The total amount is:" + result;
}