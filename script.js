// Per first-class ticket price
let perFirstClassTicket = 150;

// Per Economy-class ticket price
let perEconomyTicket = 100;

//charge 10% vat
let vat = 0.1;

document
  .getElementById("firstPlusBtn")
  .addEventListener("click",function (event) {

    event.preventDefault();

    update("firstInputValue", true)
    
}); //first class plus Button

document
  .getElementById("firstMinusBtn")
  .addEventListener("click",function (event) {

    event.preventDefault()

    update("firstInputValue",false)
    
}); //first class minus Btn

document.getElementById("ecoPlusBtn").addEventListener("click",function (event) {

    event.preventDefault();

    update("ecoInputValue",true);
    
}); //Economy plus Button

document.getElementById("ecoMinusBtn").addEventListener("click",function (event) {

    event.preventDefault();
    update("ecoInputValue",false)
    
}); //Economy minus Btn


function update(id,isIncrease) {


  if (id == "firstInputValue" || id == "ecoInputValue") {
    let catchInputValue = document.getElementById(id).value;

    catchInputValue = parseFloat(catchInputValue);

    if (isIncrease == true) {
      catchInputValue++;
    }
    if (isIncrease == false) {
      catchInputValue--;
    }

    if (catchInputValue == -1) {
      console.log("Negative value not allow");
    } 
    else {
      document.getElementById(id).value = catchInputValue;

      updateSubtotal();

      updateTax();

      updateTotal();
    }
  }
}

function updateSubtotal() {

    let firstInputValue = document.getElementById("firstInputValue").value;

    firstInputValue = parseFloat(firstInputValue);

    let totalFirstClsTicketPrice = firstInputValue *perFirstClassTicket;

    let ecoInputValue = document.getElementById("ecoInputValue").value;

    ecoInputValue = parseFloat(ecoInputValue);

    let totalEcoTicketPrice = ecoInputValue *perEconomyTicket;

    let total = totalEcoTicketPrice + totalFirstClsTicketPrice;
    
    document.getElementById("totalSubTotal").innerText = total;
    
}


function updateTax() {

    let totalSubTotal = document.getElementById("totalSubTotal").innerText;

    totalSubTotal = parseFloat(totalSubTotal);

    let totalVat = totalSubTotal * vat;

    document.getElementById("totalTax").innerText = totalVat;
    
}

function  updateTotal() {

    let currentSubTotal = document.getElementById("totalSubTotal").innerText;

    currentSubTotal = parseFloat(currentSubTotal);

    let currentTax = document.getElementById("totalTax").innerText;

    currentTax = parseFloat(currentTax);

    let total = currentSubTotal + currentTax;

    document.getElementById("total").innerText = total;
    
}

