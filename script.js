// Smooth rotating quotes
const quotes = [
  "“Your small kindness can change a life.”",
  "“Giving is not just about making a donation, it's about making a difference.”",
  "“Charity begins at home, but should not end there.”"
];

let quoteIndex = 0;
const quoteEl = document.getElementById("quote");

function showQuote() {
  quoteEl.classList.remove("fade-in");
  quoteEl.classList.add("fade-out");

  setTimeout(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteEl.textContent = quotes[quoteIndex];
    quoteEl.classList.remove("fade-out");
    quoteEl.classList.add("fade-in");
  }, 500);
}

setInterval(showQuote, 5000);
quoteEl.classList.add("fade-in");

// Posts / Motivation Cards
const posts = [
  { title: "A Helping Hand", description: "We provided clean water to 50 families.", image: "images/community2.jpg" },
  { title: "Feeding Hope", description: "Food distributed to 30 children in need.", image: "images/community3.jpg" },
  { title: "Education Matters", description: "School supplies for 40 kids.", image: "images/community1.jpg" }
];

const cardsDiv = document.getElementById("cards");

posts.forEach((post, i) => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${post.image}" alt="${post.title}">
    <h3>${post.title}</h3>
    <p>${post.description}</p>
  `;
  cardsDiv.appendChild(div);
});

// Scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".card, .gallery-images img").forEach(el => observer.observe(el));

// Payment methods data
// Payment methods data with phone numbers (replace with real numbers for each service)
const paymentMethods = [
  { name: "EVC PLUS", logo: "images/evcplus.png", phone: "+252XXXXXXXXX" },
  { name: "E-DAHAB PLUS", logo: "images/edahab.png", phone: "+252XXXXXXXXX" },
  { name: "E-JEEB", logo: "images/ejeeb.png", phone: "+252XXXXXXXXX" },
  { name: "PAYPAL", logo: "images/paypal.png", phone: "+252XXXXXXXXX" },
  { name: "MASTERCARD PAYMENT", logo: "images/mastercard.png", phone: "+252XXXXXXXXX" }
];





const paymentDiv = document.getElementById("payment-methods");

// Function to display payment options
function showPayments() {
  paymentDiv.innerHTML = ""; // clear existing
  paymentMethods.forEach(method => {
    const card = document.createElement("a");
    card.href = `tel:${method.phone}`;
    card.className = "payment-card";
    card.innerHTML = `
      <img src="${method.logo}" alt="${method.name}">
      <p>${method.name}</p>
    `;
    paymentDiv.appendChild(card);
  });
}

// Call the function
showPayments();

// Modal logic
const modal = document.getElementById("paymentModal");
const openBtn = document.getElementById("openPayment");
const closeBtn = document.querySelector(".modal .close");

// Show modal when Payment navbar is clicked
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal when X is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});