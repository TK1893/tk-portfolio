// Import aller Bootstrap-JS
import * as bootstrap from 'bootstrap';
import '../scss/contact.scss'; // Importiere die seiten-spezifischen Stile für die Startseite

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('/send', {
      method: 'POST',
      body: new URLSearchParams(formData),
    })
      .then((response) => response.text())
      .then((result) => {
        alert(result);
      })
      .catch((error) => {
        alert('Error: ' + error);
      });
  });
});
