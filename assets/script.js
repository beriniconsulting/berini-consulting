
const light = document.querySelector(".cursor-light");
window.addEventListener("mousemove", (e) => {
  if (!light) return;
  light.style.left = e.clientX + "px";
  light.style.top = e.clientY + "px";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 0.035, 0.25)}s`;
  observer.observe(el);
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", ((e.clientX - rect.left) / rect.width) * 100 + "%");
    card.style.setProperty("--my", ((e.clientY - rect.top) / rect.height) * 100 + "%");
  });
});

const path = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach(a => {
  const href = a.getAttribute("href");
  if (href === path || (path === "" && href === "index.html")) a.classList.add("active");
});


// Animated counters on scroll
const counters = document.querySelectorAll(".count");
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.target || "0");
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const duration = 1300;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = `${prefix}${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.35 });

counters.forEach((counter) => counterObserver.observe(counter));
