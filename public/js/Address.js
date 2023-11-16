const addressFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const name = document.querySelector('#address-name').value.trim();
    const address = document.querySelector('#address-address').value.trim();
    const phone_number = document.querySelector('#address-phone"').value.trim();

    if (name && address && phone_number) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/addresses', {
        method: 'POST',
        body: JSON.stringify({ name, address, phone_number }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/address');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('.login-form')
    .addEventListener('submit', addressFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);