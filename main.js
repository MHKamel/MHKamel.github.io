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
