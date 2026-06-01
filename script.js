const weddingDate = new Date("October 8, 2026 19:30:00");

function updateCountdown(){

const now = new Date();

const diff = weddingDate - now;

const days =
Math.floor(diff / (1000 * 60 * 60 * 24));

const hours =
Math.floor((diff / (1000 * 60 * 60)) % 24);

const minutes =
Math.floor((diff / (1000 * 60)) % 60);

const seconds =
Math.floor((diff / 1000) % 60);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown,1000);

updateCountdown();

