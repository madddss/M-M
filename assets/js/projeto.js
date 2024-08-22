// Slideshow das imagens
let currentSlide = 0;
const slides = [ 'img1.pg', 'img2.jpg', 'img3.jpg']; // Substitua com suas imagens
const slideElement = document.getElementById('slide');

function changeSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    slideElement.src = slides[currentSlide];
}

setInterval(changeSlide, 3000); // Muda a imagem a cada 3 segundos

// Cronômetro do tempo juntos
const startDate = new Date('2023-07-20T00:00:00'); // Data de início do relacionamento
const timeTogetherElement = document.getElementById('timeTogether');

function updateTime() {
    const now = new Date();
    const difference = now - startDate;

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    timeTogetherElement.innerHTML = ${years} anos, ${months} meses, ${days} dias<br>${hours} horas, ${minutes} minutos e ${seconds} segundos;
}

setInterval(updateTime, 1000);
