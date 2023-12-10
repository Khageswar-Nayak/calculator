let display = document.getElementById("display");

let state = false;

function appendToDisplay(value) {
  if (state === true) {
    display.value = "";
    display.value += value;
    state = false;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
    state = true;
  } catch (error) {
    display.value = "Error";
  }
}
