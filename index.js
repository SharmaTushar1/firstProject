// variables
const output = document.querySelector(".secondRow");
const operators = ["+", "-", "/", "*", "."];
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
    let previousCharacter = output.innerHTML.substring(
      output.innerHTML.length - 1,
      output.innerHTML.length
    );

    if (btn == "RESET") {
      output.innerHTML = " ";
    }
    if (btn == "DEL") {
      output.innerHTML = output.innerHTML.slice(0, -1);
    }
    if (
      (operators.includes(previousCharacter) && operators.includes(btn)) ||
      (output.innerHTML.includes(".") && btn == ".")
    ) {
      console.log("the two are the same");
    } else if (btn !== "DEL" && btn !== "RESET" && btn !== "=") {
      output.insertAdjacentHTML("beforeend", buttons[i].innerHTML);
    }

    if (btn == "=") {
      calculate();
    }
  });
}

function calculate() {
  if (math.evaluate(output.innerHTML) > 0) {
    output.innerHTML = math.evaluate(output.innerHTML);
  } else {
    output.innerHTML = math.evaluate(output.innerHTML).toFixed(2);
  }
}
