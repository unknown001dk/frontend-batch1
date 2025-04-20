function calculateSplit() {
  const bill = parseFloat(document.getElementById("bill").value);
  const people = parseFloat(document.getElementById("person").value);
  const result = document.getElementById("result");

  if (isNaN(bill) || isNaN(people)) {
    result.textContent = "Please enter valid inputs!.";
  }

  const split = (bill / people).toFixed(2);
  result.textContent = `Each pays: ₹${split}`;
}
