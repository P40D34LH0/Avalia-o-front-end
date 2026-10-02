document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');

      requiredFields.forEach((field) => {
        const errorElement = document.getElementById(`error-${field.id}`);
        
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#ff4d4d';
          if (errorElement) errorElement.style.display = 'block';
        } else {
          field.style.borderColor = 'var(--blue-neon)';
          if (errorElement) errorElement.style.display = 'none';
        }
      });

      const emailField = document.getElementById('email');
      if (emailField && emailField.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailError = document.getElementById('error-email');
        if (!emailRegex.test(emailField.value)) {
          isValid = false;
          emailField.style.borderColor = '#ff4d4d';
          if (emailError) {
            emailError.textContent = 'Por favor, insira um e-mail válido.';
            emailError.style.display = 'block';
          }
        }
      }

      if (isValid) {
        window.location.href = 'confirmacao.html';
      }
    });
  }
});