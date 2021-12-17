// variables
const output = document.querySelector(".secondRow");
const operators = document.querySelectorAll(".operator");
// buttons
const buttons = document.getElementsByClassName("button");
const themeButtons = document.querySelectorAll("input");

// theme buttons

for (let i = 0; i < themeButtons.length; i++) {
  themeButtons[i].addEventListener("click", function () {
    let tb = themeButtons[i];
    if (tb.id == "first") {
      document.getElementById("switcher-id").href = " ";
    } else if (tb.id == "second") {
      document.getElementById("switcher-id").href = "css-themes/light.css";
    } else if (tb.id == "third") {
      document.getElementById("switcher-id").href = "css-themes/dark.css";
    }
  });
}
// calc buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let btn = buttons[i].innerHTML;
    if (btn == "RESET") {
      output.innerHTML = " ";
    }
    if (btn == "DEL") {
      output.innerHTML = output.innerHTML.slice(0, -1);
    } else if (btn !== "DEL" && btn !== "RESET" && btn !== "=") {
      output.insertAdjacentHTML("beforeend", buttons[i].innerHTML);
    }

    if (btn == "=") {
      calculate();
    }
  });
}

function calculate() {
  output.innerHTML = math.evaluate(output.innerHTML);
}
