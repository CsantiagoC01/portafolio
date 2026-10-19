// script.js: comportamiento mínimo (menú y formulario)
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  if (toggle) {
    toggle.addEventListener('click', () => menu.classList.toggle('show'));
  }

  const form = document.getElementById('contact-form');
  const response = document.getElementById('form-response');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    response.textContent = `Gracias ${data.get('name')}, tu mensaje fue recibido.`;
    form.reset();
  });
});
