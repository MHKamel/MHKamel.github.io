// Typing animation for your main job titles
const titles = [
  "Senior Webmaster",
  "Marketing Technology & Ecommerce Expert",
  "DevOps Engineer",
  "AI & Web Infrastructure Specialist"
];
let titleIdx = 0, charIdx = 0, isDeleting = false;
const el = document.getElementById('animated-title');
function typeAnim() {
  if (!el) return;
  const fullText = titles[titleIdx];
  el.textContent = fullText.substring(0, charIdx) + (charIdx < fullText.length && !isDeleting ? "|" : "");
  if (!isDeleting && charIdx < fullText.length) {
    charIdx++;
    setTimeout(typeAnim, 65);
  } else if (isDeleting && charIdx > 0) {
    charIdx--;
    setTimeout(typeAnim, 28);
  } else if (!isDeleting) {
    setTimeout(() => { isDeleting = true; typeAnim(); }, 1200);
  } else {
    isDeleting = false;
    titleIdx = (titleIdx + 1) % titles.length;
    setTimeout(typeAnim, 250);
  }
}
typeAnim();

// Fade in hero card on load
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('profile-hero-card').classList.add('visible');
  // Section reveal on scroll
  const reveals = document.querySelectorAll('section.reveal');
  const observer = new window.IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach(section => observer.observe(section));
  // Restore dark mode
  if (localStorage.getItem('darkmode') === 'yes') {
    document.body.classList.add('dark-mode');
    var btn = document.getElementById('darkBtn');
    if(btn) btn.textContent = '☀️ Light Mode';
  }
});
// Simple dark mode toggle
const toggleBtn = document.getElementById('dark-mode-toggle');
toggleBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});


// Dark mode toggle and memory
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  var btn = document.getElementById('darkBtn');
  if(document.body.classList.contains('dark-mode')) {
    btn.textContent = '☀️ Light Mode';
    localStorage.setItem('darkmode', 'yes');
  } else {
    btn.textContent = '🌙 Dark Mode';
    localStorage.setItem('darkmode', 'no');
  }
}

// ScrollSpy: highlight nav as you scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('main section[id]');
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  let currentSection = null;
  sections.forEach(section => {
    const offsetTop = section.offsetTop - 80;
    if(scrollY >= offsetTop) currentSection = section.id;
  });
  document.querySelectorAll('.top-nav a').forEach(link => {
    link.classList.remove('active');
    if (currentSection && link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});
// Smooth scroll for nav links
$('a.nav-link').on('click', function(e) {
  var hash = this.hash;
  if (hash !== "") {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 60
    }, 600);
  }
});
