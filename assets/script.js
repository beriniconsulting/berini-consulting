const counters = document.querySelectorAll(".counter");

function formatNumber(value, suffix) {
  if (suffix === "K") return `${value}K`;
  if (suffix === "M€") return `${value}M€`;
  return value.toLocaleString("fr-FR").replace(/\s/g, " ");
}

function animateCounter(counter) {
  const target = Number(counter.dataset.target || 0);
  const prefix = counter.dataset.prefix || "";
  const suffix = counter.dataset.suffix || "";
  const duration = 1400;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    const current = Math.round(target * eased);

    counter.textContent = `${prefix}${formatNumber(current, suffix)}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      counter.textContent = `${prefix}${formatNumber(target, suffix)}`;
    }
  }

  requestAnimationFrame(update);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = "true";
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.35 });

counters.forEach((counter) => observer.observe(counter));
