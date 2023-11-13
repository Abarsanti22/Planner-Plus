const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const address = document.querySelector('#project-address').value.trim();
  const phone_number = document.querySelector('#project-phone_number').value.trim();

  if (name && address && phone_number) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, address, phone_number }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
