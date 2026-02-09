function moveButton() {
    // Play music when she first interacts with the site
    const music = document.getElementById('bgMusic');
    music.play();

    const noBtn = document.getElementById('noButton');
    
    // Get screen dimensions
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;

    // Generate random coordinates
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    // Apply new position
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function celebrate() {
    // Ensure music is playing
    const music = document.getElementById('bgMusic');
    music.play();

    // Trigger Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffafcc', '#ffc8dd']
    });

    // Update Text
    document.getElementById('question').innerHTML = "Yay! See you on the 14th! 😘";
    document.getElementById('name-greeting').innerHTML = "I Love You!";
    
    // Hide the No button
    document.getElementById('noButton').style.display = 'none';

    // Make Yes button bigger
    document.getElementById('yesButton').style.transform = "scale(1.5)";
}
