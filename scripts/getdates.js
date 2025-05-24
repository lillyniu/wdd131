const yearElement = document.getElementById("year");
const lastModifiedElement = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate}`;