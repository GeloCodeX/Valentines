// Create floating hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createFloatingHeart, 800);

function Yespo() {
    alert('💕 Your love has been sent! 💕\n\n THANK YOU SO MUCH FOR BEING MY VALENTINE!');
}

function playMusic() {
    window.open('https://open.spotify.com/track/6qvHdIO3la7MIDr6IX4S3S?si=51904f0c09b04133', '_blank');
}
