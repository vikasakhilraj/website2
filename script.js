const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email");
  const message = document.getElementById("formMessage");
  if (!email.checkValidity()) {
    email.reportValidity();
    return;
  }
  message.textContent = "Thanks for your interest! This demo form is not connected to an email service yet.";
  message.style.color = "#e8c69b";
  email.value = "";
});
