// ── CUSTOM CURSOR ──
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';

  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';

  requestAnimationFrame(animateCursor);
}
animateCursor();


// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

revealEls.forEach((el) => observer.observe(el));


// ── SMOOTH NAV HIGHLIGHT ──
// Adds subtle background to nav when scrolled
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(245,242,235,0.92)';
    nav.style.backdropFilter = 'blur(12px)';
    nav.style.boxShadow = '0 1px 0 rgba(10,10,10,0.08)';
    nav.style.mixBlendMode = 'normal';
  } else {
    nav.style.background = '';
    nav.style.backdropFilter = '';
    nav.style.boxShadow = '';
    nav.style.mixBlendMode = 'multiply';
  }
});
