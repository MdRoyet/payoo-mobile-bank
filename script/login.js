document.getElementById("login-btn").addEventListener("click", function () {
  // 1. Input Mobile Number
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);

  // 2. Get the Pin Input
  const inputPin = document.getElementById("input-pin");
  const pinNumber = inputPin.value;
  console.log(pinNumber);
  // 3. Match Pin & Mobile Number
  if (contactNumber == "01681430593" && pinNumber == "1520") {
    // 4. If True - alert>HomePage
    alert("Login Successful");
    window.location.assign("./home.html");
  } else {
    // 5.If false - Alert>Try Again
    alert("Incorrect Number or Password! -------> Try Again");
    return;
  }
});
