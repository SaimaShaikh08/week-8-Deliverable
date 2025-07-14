document.getElementById("tripForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const days = parseInt(document.getElementById("days").value);
  const itinerary = document.getElementById("itinerary");
  let plan = "";
  for (let i = 1; i <= days; i++) {
    plan += <p>Day ${i}: Explore a beach, visit a church, enjoy Goan cuisine.</p>;
  }
  itinerary.innerHTML = plan;
});

// Simple review slider
const reviews = [
  "Goa is a paradise! Beautiful beaches and friendly locals.",
  "Amazing food and vibrant culture!",
  "Loved the water sports and nightlife!",
  "Perfect destination for relaxation and adventure.",
];
let index = 0;
setInterval(() => {
  document.getElementById("reviewText").textContent = reviews[index];
  index = (index + 1) % reviews.length;
}, 3000);