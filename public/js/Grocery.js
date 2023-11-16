const groceryFormHandler = async (event) => {
    event.preventDefault();
  
// Collect values from the login form
const itemName = document.querySelector('#grocery-name').value.trim();
const itemQuantity = document.querySelector('#grocery-quantity').value.trim();

if (itemName && itemQuantity) {
  // Send a POST request to the API endpoint
  const response = await fetch('/api/groceries', {
    method: 'PUT',
    body: JSON.stringify({ itemName, itemQuantity }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace('/grocery');
  } else {
    alert(response.statusText);
  }
}
};


// Handlebars.registerHelper('json', function(context) {
// return JSON.stringify(context);
// });

  
  document
    .querySelector('.login-form')
    .addEventListener('submit', groceryFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  
// ????? HOW WOULD WE MODIFY THIS SO THAT GROCERY.JS WOULD FUNCTION IN PUBLIC/  WHEN THE USER CLICKS GROCERY LIST AFTER LOGGING IN

