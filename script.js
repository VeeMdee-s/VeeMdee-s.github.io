document.addEventListener("DOMContentLoaded", () => {
  // Typing animation
  const text = "Open Source Designer • Front-End Developer • Ubuntu Enthusiast";
  const typingElement = document.getElementById("typing");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 80);
    }
  }
  type();

  // Fade-in scroll effect
  const sections = document.querySelectorAll("section");

  function showSections() {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", showSections);
  showSections(); // Run on load
});
// ===== Back to Top Button =====
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
