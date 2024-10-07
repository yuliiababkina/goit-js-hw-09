let formData = {};
const form = document.querySelector('form');

//Отримуємо дані з input та додаємо їх до локального сховища
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

//Зчитуємо дані з локального сховища

if (localStorage.getItem('feedback-form-state')) {
  formData = JSON.parse(localStorage.getItem('feedback-form-state'));

  for (const key in formData) {
    form.elements[key].value = formData[key];
  }
}

// Відправка форми
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  const email = form.elements.email.value.trim();
  const msg = form.elements.message.value.trim();

  if (email === '' || msg === '') {
    return alert('Fill please all fields');
  } else {
    event.preventDefault();
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    formData = {};
  }
}
