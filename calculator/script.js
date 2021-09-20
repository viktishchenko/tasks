const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operator");
const clearBtns = document.querySelectorAll(".clear-btn");
const decimalBtn = document.getElementById("desimal");
const result = document.getElementById("result");
const minusBtn = document.querySelector(".minus");
const squareBtn = document.querySelector(".square");
const display = document.getElementById("display");
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = "";

for (var i = 0; i < numbers.length; i++) {
  var num = numbers[i];
  num.addEventListener("click", function (e) {
    numberPress(e.target.textContent);
    console.log(e.target.textContent);
  });
}

for (var i = 0; i < operations.length; i++) {
  var operationBtn = operations[i];
  operationBtn.addEventListener("click", function (e) {
    operationPress(e.target.textContent);
    console.log(e.target.textContent);
  });
}

for (var i = 0; i < clearBtns.length; i++) {
  var clearBtn = clearBtns[i];
  clearBtn.addEventListener("click", function (e) {
    clearPress(e.target.textContent);
    console.log(e.target.textContent);
  });
}

decimalBtn.addEventListener("click", function (e) {
  desimalPress();
  console.log(e.target.textContent);
});

squareBtn.addEventListener("click", function (e) {
  squarePress();
  console.log(e.target.textContent);
});

minusBtn.addEventListener("click", function (e) {
  minusPress();
  console.log(e.target.textContent);
});

function numberPress(number) {
  if (MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
  } else {
    if (display.value === "0") {
      display.value = number;
    } else {
      display.value += number;
    }
  }
}

function operationPress(op) {
  let localOperationMemory = display.value;

  if (MemoryNewNumber && MemoryPendingOperation !== "=") {
    display.value = MemoryCurrentNumber;
  } else {
    MemoryNewNumber = true;
    if (MemoryPendingOperation === "+") {
      MemoryCurrentNumber += +localOperationMemory;
    } else if (MemoryPendingOperation === "-") {
      MemoryCurrentNumber -= +localOperationMemory;
    } else if (MemoryPendingOperation === "*") {
      MemoryCurrentNumber *= +localOperationMemory;
    } else if (MemoryPendingOperation === "÷") {
      MemoryCurrentNumber /= +localOperationMemory;
    } else if (MemoryPendingOperation === "xn") {
      MemoryCurrentNumber = Math.pow(MemoryCurrentNumber, localOperationMemory);
    } else {
      MemoryCurrentNumber = +localOperationMemory;
    }
    display.value = parseFloat(MemoryCurrentNumber.toFixed(10));
    MemoryPendingOperation = op;
  }
}

function desimalPress(argument) {
  let localDecimalMemory = display.value;

  if (MemoryNewNumber) {
    localDecimalMemory = "0.";
    MemoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf(".") === -1) {
      localDecimalMemory += ".";
    }
  }
  display.value = localDecimalMemory;
}

function clearPress(id) {
  if (id === "CE") {
    display.value = "0";
    MemoryNewNumber = true;
  } else if (id === "AC") {
    display.value = "0";
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = "";
  }
}

function squarePress(params) {
  let localSquareMemory = display.value;
  if (localSquareMemory < 0) {
    MemoryCurrentNumber = "Error";
  } else {
    MemoryCurrentNumber = Math.sqrt(+localSquareMemory);
  }
  display.value = MemoryCurrentNumber;
}

function minusPress(params) {
  let localMinusMemory = display.value;
  localMinusMemory = -localMinusMemory;
  display.value = localMinusMemory;
}
