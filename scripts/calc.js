document.querySelector(".clear").addEventListener("click", () => {
  document.querySelector(".calc-display").value = "";
  document.querySelector(".calc-result").value = "";
});

function input(value) {
  document.querySelector(".calc-display").value += value;
}

function equal() {
  const exp = document.querySelector(".calc-display").value;

  document.querySelector(".calc-result").value = eval(exp);
}
function back() {
  const exp = document.querySelector(".calc-display").value;

  document.querySelector(".calc-display").value = exp.slice(0, exp.length - 1);
}

function dot() {
  document.querySelector(".calc-display").value = "0.";
}

function on() {
  document.querySelector(".calc-display").value = "0";
}
