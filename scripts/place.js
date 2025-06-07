document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

const temperature = parseFloat(document.getElementById('temperature').textContent);
const windSpeed = parseFloat(document.getElementById('windSpeed').textContent);
let windChill = 'N/A';

if (temperature <= 10 && windSpeed > 4.8) {
  windChill = (
    13.12 +
    0.6215 * temperature -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temperature * Math.pow(windSpeed, 0.16)
  ).toFixed(1);
  windChill += '°C';
}

document.getElementById('windChill').textContent = windChill;
