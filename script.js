
// Countdown to the next Defence Day
const countdown = () => {
    const nextDefenceDay = new Date(`September 6, ${new Date().getFullYear() + 1} 00:00:00`).getTime();
    const now = new Date().getTime();
    const distance = nextDefenceDay - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "Defence Day is today!";
    }
};

setInterval(countdown, 1000);

// Armament Animation
const armament = document.getElementById('armament');
armament.addEventListener('mouseover', () => {
    armament.classList.add('rotate');
});
