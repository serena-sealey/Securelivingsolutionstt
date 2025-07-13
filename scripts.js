document.addEventListener('DOMContentLoaded', () => {

  // Contact or generic signUp form validation (name, email, message)
  const contactForm = document.getElementById('contactForm') || document.getElementById('signUpForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Clear previous error highlights
      const inputs = this.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.style.borderColor = '';
      });

      let valid = true;

      // Name validation
      const name = this.querySelector('input[name="name"]');
      if (!name || name.value.trim() === '') {
        alert('Please enter your name.');
        if (name) name.style.borderColor = 'red';
        valid = false;
        name.focus();
        return;
      }

      // Email validation
      const email = this.querySelector('input[name="email"]');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailPattern.test(email.value.trim())) {
        alert('Please enter a valid email address.');
        if (email) email.style.borderColor = 'red';
        valid = false;
        email.focus();
        return;
      }

      // Message or other required textarea validation
      const message = this.querySelector('textarea[name="message"]');
      if (message && message.value.trim() === '') {
        alert('Please enter your message.');
        message.style.borderColor = 'red';
        valid = false;
        message.focus();
        return;
      }

      // If all validations pass:
      if (valid) {
        alert('Thank you for contacting us! Your message has been sent.');
        this.reset();
      }
    });
  }

  // Sign Up form validation (id="signupForm")
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = this.signupName.value.trim();
      const email = this.signupEmail.value.trim();
      const password = this.signupPassword.value.trim();

      if (!name) {
        alert('Please enter your full name.');
        this.signupName.focus();
        return;
      }

      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        this.signupEmail.focus();
        return;
      }

      if (password.length < 6) {
        alert('Password must be at least 6 characters.');
        this.signupPassword.focus();
        return;
      }

      alert('Sign up successful! (Demo)');
      this.reset();
    });
  }

  // Login form validation (id="loginForm")
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = this.loginEmail.value.trim();
      const password = this.loginPassword.value.trim();

      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        this.loginEmail.focus();
        return;
      }

      if (!password) {
        alert('Please enter your password.');
        this.loginPassword.focus();
        return;
      }

      alert('Login successful! (Demo)');
      this.reset();
    });
  }

  // Email validation helper
  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  // Product filter functionality
  const filterButtons = document.querySelectorAll('.product-filters button');
  const products = document.querySelectorAll('.product-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      products.forEach(product => {
        if (filter === 'all' || product.dataset.category === filter) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });

  // Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
