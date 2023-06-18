function validateForm(event) {
    event.preventDefault(); // Prevent form submission if validation fails
  
    // Get form inputs
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
  
    // Validate inputs
    if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      nameInput.focus();
      return;
    }
  
    if (emailInput.value.trim() === '') {
      alert('Please enter your email.');
      emailInput.focus();
      return;
    }
  
    if (messageInput.value.trim() === '') {
      alert('Please enter a message.');
      messageInput.focus();
      return;
    }
  
    // If all fields are filled in, submit the form
    alert('Form submitted successfully!');
    document.getElementById('contact-form').reset();
  }