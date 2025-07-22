// Back to top button
const backToTop = document.getElementById('backToTop');
window.onscroll = function() {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
};
backToTop.onclick = () => window.scrollTo({top: 0, behavior: "smooth"});

// Smooth scroll for anchor links (with Bootstrap)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 75,
        behavior: 'smooth'
      });
    }
  });
});

// Bootstrap validation
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          event.preventDefault()
          document.getElementById('thankyouMsg').classList.remove('d-none');
          setTimeout(() => { document.getElementById('thankyouMsg').classList.add('d-none'); }, 3000);
          form.reset();
        }
        form.classList.add('was-validated')
      }, false)
    })
})()

// AOS (Animate On Scroll)
AOS.init({
  duration: 700,
  once: true,
  offset: 100,
});
