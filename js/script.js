(function() {

const titles = document.querySelectorAll('.title-line');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-show');
    } else {
      entry.target.classList.remove('is-show');
    }
  });
}, {
  threshold: 0.3
});

titles.forEach(title => {
  observer.observe(title);
});



document.querySelector(".top-btn").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});








})();