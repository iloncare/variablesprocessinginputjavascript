var extraDIV = document.body.querySelector(".extra");

var totalBill = Number(prompt("What is the total amount of your bill?"));

var billTax = (totalBill*0.07)+(totalBill);

var finalAmount = (billTax*0.05)+(billTax);

extraDIV.innerHTML= "The final amount of your bill, including tax and tip is $" +finalAmount;