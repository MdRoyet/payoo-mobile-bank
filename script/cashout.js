document.getElementById("cashout-btn").addEventListener("click", function () {
  const cashoutNumber = getvaluefromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("Please input 11 digit numbers");
    return;
  }
  const cashoutAmount = getvaluefromInput("cashout-amount");

  const currentBalance = getBalance();

  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  const pin = getvaluefromInput("cashout-pin");

  if (pin == "1520") {
    alert("Cashout Successful");
    setBalance(newBalance);
  } else {
    alert("Invalid");
  }
});
//   //1. Get the agent number & validate it

//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);
//   if (cashoutNumber.length != 11) {
//     alert("Please input 11 digit numbers");
//     return;
//   }
//   //2. get the amount, validate, convert to number

//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);
//   //3. get the current balance, validate, convert to number

//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   console.log(balance);

//   //4. calculate new balance

//   const newBalance = Number(balance) - Number(cashoutAmount);

//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   }
//   console.log("New Balance:", newBalance);

//   //5. get the pin & verify - trur or false

//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const pin = cashoutPinInput.value;
//   if (pin == "1520") {
//     alert("Cashout Successful");
//     console.log("New Balance:", newBalance);
//     balanceElement.innerText = newBalance;
//   } else {
//     alert("Invalid Pin");
//     return;
//   }
// });
