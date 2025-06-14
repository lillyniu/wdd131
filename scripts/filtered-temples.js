const yearElement = document.getElementById('year');
const lastModifiedElement = document.getElementById('lastModified');

if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
}

if (lastModifiedElement) {
  const lastModifiedDate = document.lastModified;
  lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate}`;
}

const hamburgerButton = document.querySelector('#hamburgerButton');
const navMenu = document.querySelector('nav ul');

hamburgerButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');

  if (navMenu.classList.contains('open')) {
    hamburgerButton.textContent = '✖';
  } else {
    hamburgerButton.textContent = '☰';
  }
});
