const newFormHandler = async (event) => {
  event.preventDefault();

  const recipient = document.querySelector('#project-recipient').value.trim();
  const occasion = document.querySelector('#project-occasion').value.trim();
  const budget = document.querySelector('#project-budget').value.trim();


  if (recipient && occasion && budget) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ recipient, occasion, budget }),
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
