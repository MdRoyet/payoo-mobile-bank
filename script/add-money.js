document.getElementById("add-money-btn").addEventListener("click", function () {
  const bankAccount = document.getElementById("add-money-bank").value;
  if (bankAccount == "Select A Bank") {
    alert("Please Select A Bank");
    return;
  }

  const accountNumber = getvaluefromInput("add-money-number");
  if (accountNumber.length != 11) {
    alert("Please Select 11 Digit Number");
    return;
  }

  const amount = getvaluefromInput("add-money-amount");
  const newBalance = getBalance() + Number(amount);

  const pin = getvaluefromInput("add-money-pin");
  if (pin == "1520") {
    alert(`Add Money from 
        ${bankAccount} at 
        ${new Date()}`);
    setBalance(newBalance);
  } else {
    alert("invalid Pin");
    return;
  }
});
