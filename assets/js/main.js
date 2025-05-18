// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');

  if(navMenu.classList.contains('show')) {
    menuToggle.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
});


// Modal logic
const letsTalkButton = document.querySelector('.lets-talk-btn');
const modal = document.getElementById('contact-modal');
const closeModal = document.getElementById('close-modal');

if(letsTalkButton) {
  letsTalkButton.addEventListener('click', () => {
      modal.style.display = 'block';
  });
}

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Toast notification
function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000); 
}

// Handle Contact Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual form submission

  // Close modal
  modal.style.display = 'none';

  // Show toast
  showToast();

  // Reset form fields
  contactForm.reset();
});



