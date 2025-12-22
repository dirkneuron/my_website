// ============================================
// FORM SUBMISSION HANDLER
// ============================================

const form = document.getElementById('waitlist-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;

  try {
    console.log('Form submitted with email:', email);
    
    // TODO: Replace with your API endpoint
    // Uncomment below to send to backend:
    // const response = await fetch('/api/waitlist', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email })
    // });
    //
    // if (!response.ok) {
    //   throw new Error('Failed to join waitlist');
    // }
    // const data = await response.json();
    // console.log('Success:', data);

    alert("Thank you! We've added you to the waitlist.");
    form.reset();
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again.');
  }
}); // ← Closes submit handler

// ============================================
// ADDITIONAL UTILITIES
// ============================================

// Optional: Add input validation
const emailInput = document.getElementById('email');

emailInput.addEventListener('blur', () => {
  const email = emailInput.value;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  if (email && !isValid) {
    emailInput.style.borderColor = 'rgba(255, 100, 100, 0.5)';
  } else {
    emailInput.style.borderColor = '';
  }
}); // ← Closes blur listener

// Optional: Track analytics on form interaction
emailInput.addEventListener('focus', () => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'focus', {
      event_category: 'engagement',
      event_label: 'email_input_focus'
    });
  }
}); // ← Closes focus listener

form.addEventListener('submit', () => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submit', {
      event_category: 'conversion',
      event_label: 'waitlist_signup'
    });
  }
}); // ← Closes second submit listener