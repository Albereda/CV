// Animación typing para el nombre
document.addEventListener('DOMContentLoaded', () => {
  const heroName = document.querySelector('.hero-name');
  const text = heroName.textContent;
  heroName.textContent = '';
  let i = 0;
  function typing() {
    if (i < text.length) {
      heroName.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
  }
  typing();
});

// Animación scroll fade-in para secciones
const sections = document.querySelectorAll('.section');
const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  section.classList.add('before-fade');
  observer.observe(section);
});
