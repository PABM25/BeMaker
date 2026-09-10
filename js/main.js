import { initPortfolio } from "./modules/portfolio.js";
import { initModals } from "./modules/modals.js";
import { initTerminal } from "./modules/terminal.js";
import { initChatbot } from "./modules/chatbot.js";
import { initPixelCanvas } from "./modules/pixel-canvas.js";
import "./modules/components.js";

document.addEventListener("DOMContentLoaded", () => {
  if (typeof AOS !== "undefined") {
    AOS.init({ once: true, duration: 800 });
  }
  initModals();
  initTerminal();
  initChatbot();
  initPortfolio();
});
initPixelCanvas();

// Scroll to top functionality
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  }
});
