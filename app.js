//Step 1
//add
const add = (x, y) => {
  return x + y;
};

//substract
const substract = (x, y) => {
  return x - y;
};

//divide
const divide = (x, y) => {
  return x / y;
};

//multiply
const multiply = (x, y) => {
  return x * y;
};

//step 2 operate function
//two parameters: a. an operator b. two numbers
//get user input
let substractText = document.querySelector(".substract").textContent;

let userDigitsArraySetOne = [];
let userOperatorVale = [];
let operationV = [];

//operator function
const operate = (a, b) => {
  if (a[0] == "-") {
    return substract(b[0], b[1]);
  }

  if (a[0] == "+") {
    return add(b[0], b[1]);
  }
  if (a[0] == "/") {
    return divide(b[0], b[1]);
  }

  if (a[0] == "*") {
    return multiply(b[0], b[1]);
  }
};
let paraText = document.createElement("p");
let buttons = document.querySelectorAll("button");
buttons.forEach((elements) => {
  if (elements.getAttribute("class") !== "equal-to") {
    elements.addEventListener("click", function () {
      let user_selection_one = document.querySelector(".user-selection-one");
      let value = (user_selection_one.textContent += elements.textContent);
      userDigitsArraySetOne.push(elements.textContent);
      let joinedvalue = userDigitsArraySetOne.join("");
      let operationValue = eval(joinedvalue);

      document
        .querySelector(".equal-to")
        .addEventListener("click", function () {
          user_selection_one.textContent = operationValue;
          operationValue += elements.textContent;
          operationV.push(operationValue);
        });

      document.querySelector(".clear").addEventListener("click", function () {
        userDigitsArraySetOne = [];
        user_selection_one.textContent = "";
      });
    });
  }
});

let operatorButtons = document.querySelectorAll(".operators");

operatorButtons.forEach((elements) => {
  elements.addEventListener("click", function () {});
});
