console.log("Website Loaded Successfully");
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    card.style.transform = "scale(1.05)";
  });
});
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  navbar.style.background = window.scrollY > 50 
    ? "#020617" 
    : "rgba(2,6,23,0.9)";
});