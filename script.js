// ===================== Mobile menu toggle =====================
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuToggle.classList.toggle("active");
});

// ===================== Smooth scroll + close mobile menu on click =====================
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    nav.classList.remove("open");
  });
});

// ===================== FAQ accordion =====================
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const alreadyActive = item.classList.contains('active');

    // Close all other items
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

    if (!alreadyActive) {
      item.classList.add('active');
    }
  });
});

// ===================== Scroll reveal animation =====================
const revealTargets = document.querySelectorAll("section");

revealTargets.forEach(section => section.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(section => observer.observe(section));

// ===================== Sticky header shadow on scroll =====================
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = "0 6px 20px rgba(0,0,0,.35)";
  } else {
    header.style.boxShadow = "none";
  }
});

// ===================== Footer year auto update =====================
const footerBottom = document.querySelector(".footer-bottom p");
if (footerBottom) {
  const year = new Date().getFullYear();
  footerBottom.innerHTML = `&copy; ${year} Jaa Al Haq Quran Academy. All Rights Reserved.`;
}
