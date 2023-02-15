// function for get id  value

function getInputValue(id) {
  const idValue = document.getElementById(id).value;

  return idValue;
}

// get id function

function getId(Id) {
  const id = document.getElementById(Id);
  return id;
}
// function for convert to Number

function convertNumber(text) {
  return parseInt(text);
}

// function for sum of expence

// calculate total balance

function Expence() {
  const foodAmount = parseInt(getInputValue("Food-input"));
  const rentAmount = parseInt(getInputValue("Rent-input"));
  const clothAmount = parseInt(getInputValue("Clothes-input"));
  return foodAmount + rentAmount + clothAmount;
}
getId("calculate-btn").addEventListener("click", function () {
  const incomeAmount = parseInt(getInputValue("income-input"));
  const foodAmount = parseInt(getInputValue("Food-input"));
  const rentAmount = parseInt(getInputValue("Rent-input"));
  const clothAmount = parseInt(getInputValue("Clothes-input"));
  const totalExpence = Expence(); // total expence
  if (isNaN(incomeAmount)) {
    // income input validation
    alert("please Enter Your Amount");
  } else if (isNaN(foodAmount)) {
    // foodAmount input validation
    alert("please Enter Food Amount Only");
  } else if (isNaN(rentAmount)) {
    // rentAmount input validation
    alert("please Enter Rent Amount Only");
  } else if (isNaN(clothAmount)) {
    // clothAmount input validation
    alert("please Enter Cloth Amount Only");
  } else if (totalExpence > incomeAmount) {
    alert("do't you have enugh balance for expence");
  } else {
    const lastAmount = incomeAmount - totalExpence;

    //   set total Expence
    getId("expence-amount").innerText = totalExpence;

    // set last Balance
    getId("balance").innerText = lastAmount;
  }
});

getId("save").addEventListener("click", function () {
  const balance = convertNumber(getInputValue("income-input")); // get income Balance
  const percent = convertNumber(getInputValue("percent-input")); // get percentence value
  const precentAmount = (balance * percent) / 100; // get precentence
  const finalBalance = Expence() - precentAmount;
  getId("save-amount").innerText = precentAmount;
  getId("final-balance").innerText = finalBalance; // set final balance
});
