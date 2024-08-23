function startSlideshow() {
    const slides = document.querySelectorAll('.slideshow img');
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }

    setInterval(showNextSlide, 3000); // Troca a cada 3 segundos
}

startSlideshow();

// Função para calcular a diferença entre duas datas
function calculateTimeTogether() {
    const startDate = new Date('2023-06-26T02:30:00');
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (months < 0) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += previousMonth;
    }

    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
        minutes--;
        seconds += 60;
    }
    if (minutes < 0) {
        hours--;
        minutes += 60;
    }
    if (hours < 0) {
        days--;
        hours += 24;
    }

    document.getElementById('datePart').innerHTML = 
        `${years} ano${years !== 1 ? 's' : ''}, ${months} mês${months !== 1 ? 'es' : ''}, ${days} dia${days !== 1 ? 's' : ''} ${hours} hora${hours !== 1 ? 's' : ''},`;
    document.getElementById('timePart').innerHTML = 
        ` ${minutes} minuto${minutes !== 1 ? 's' : ''}, e ${seconds} segundo${seconds !== 1 ? 's' : ''} juntos`;
}

setInterval(calculateTimeTogether, 1000);
