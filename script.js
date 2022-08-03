document.getElementById("btn15").addEventListener("click", calc);
document.getElementById("btn17").addEventListener("click", calc);
document.getElementById("btn20").addEventListener("click", calc);
document.getElementById("btncalculate").addEventListener("click", calc);
document.getElementById("btnclear").addEventListener("click", clearField);


function calc() {
  let tipPercentage = 0;
  let idEnter = event.target.id

  switch (idEnter) {
    case "btn15":
      tipPercentage = 0.15;
      document.getElementById("showpercentage").innerHTML = "15%";
      break;
    case "btn17":
      tipPercentage = 0.175;
      document.getElementById("showpercentage").innerHTML = "17.5%";
      break;
    case "btn20":
      tipPercentage = 0.2;
      document.getElementById("showpercentage").innerHTML = "20%";
      break;
    case "btncalculate":
      tipPercentage = document.getElementById("customTip").value / 100;
      document.getElementById("showpercentage").innerHTML = "your %";
  }

  let billAmount = document.getElementById("billAmount").value;
  billAmount = parseFloat(billAmount);
  let tip = billAmount * tipPercentage;
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

function clearField() {
  document.getElementById("billAmount").value = ''
  document.querySelector('.inCostum').value = ''
}

let getYear = new Date()
document.getElementById("yearNow").innerHTML = getYear.getFullYear()
