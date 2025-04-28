const quotes = [
  { quote: "Quote 1", author: "dk" },
  { quote: "Quote 2", author: "dk" },
  { quote: "Quote 3", author: "dk" },
  { quote: "Quote 4", author: "dk" },
  { quote: "Quote 5", author: "dk" },
  { quote: "Quote 6", author: "dinesh" },
  { quote: "Quote 7", author: "dk" },
];

function getQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  console.log(random)
  document.getElementById('quote').innerText = `
    ${quotes[random].quote}
  `;
  document.getElementById('author').innerText = `
    ${quotes[random].author}
  `
}
