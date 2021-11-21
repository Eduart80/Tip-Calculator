document.getElementById("btn15").addEventListener("click", calc);
document.getElementById("btn17").addEventListener("click", calc);
document.getElementById("btn20").addEventListener("click", calc);
document.getElementById("btncalculate").addEventListener("click", calc);

function calc() {
  let tipPercetage = 0;
  let buttonPressed = event.target.id;

  switch (buttonPressed) {
    case "btn15":
      tipPercetage = 0.15;
      break;
    case "btn17":
      tipPercetage = 0.175;
      break;
    case "btn20":
      tipPercetage = 0.2;
      break;
    case "btncalculate":
      tipPercetage = document.getElementById("customTip").value / 100;
  }

  let billAmount = document.getElementById("billAmount").value;
  billAmount = parseFloat(billAmount);
  let tip = billAmount * tipPercetage;
  let total = tip + billAmount;
  reportTotal(tip, total);
}
function reportTotal(tip, total) {
  tip = tip.toFixed(2);
  total = total.toFixed(2);
  document.getElementById("tipAmount").innerHTML =
    "<strong>$" + tip + "</strong>";
  document.getElementById("total").innerHTML =
    "<strong>$" + total + "</strong>";
}
let getYear = new Date();
document.getElementById("footerYear").innerHTML=
"Zedy copyright ©" + getYear.getFullYear();
console.log(getYear.getFullYear());