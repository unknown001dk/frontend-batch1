let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function updateUI() {
  const list = document.getElementById("list");
  const balance = document.getElementById("balance");
  list.innerHTML = "";
  let total = 0;

  transactions.forEach((tx, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${tx.desc} - ₹${tx.amount};
      <button class='delete' onclick='deleteTransaction(${index})'>X</button>
    `;
    if (tx.type === "expense") {
      li.style.color = "red";
      total -= tx.amount;
    } else {
      li.style.color = "green";
      total += tx.amount;
    }
    list.appendChild(li);
  });
  balance.textContent = `Balance: ₹${total}`;
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function addTransaction() {
  const desc = document.getElementById("desc").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;
  if (!desc || isNaN(amount)) {
    alert("please provide valid fields");
  }

  transactions.push({ desc, amount, type });
  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
  updateUI();
}

function deleteTransaction(index) {
  transactions.splice(index, 1);
  updateUI();
}

updateUI();