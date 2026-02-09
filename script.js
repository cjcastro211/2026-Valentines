function moveButton() {
    // Start music on the first attempt to click No
    const music = document.getElementById('bgMusic');
    music.play();

    const noBtn = document.getElementById('noButton');
    
    // Calculate random position within the whole window
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

function celebrate() {
    // Start music if it hasn't started yet
    const music = document.getElementById('bgMusic');
    music.play();

    // Trigger Heart Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffafcc', '#ffc8dd']
    });

    // Update the message
    document.getElementById('question').innerHTML = "Yay! Best Valentine ever! 😘";
    document.getElementById('name-greeting').innerHTML = "I Love You!";
    
    // Delete the No button entirely
    document.getElementById('noButton').remove();

    // Make Yes button extra big
    document.getElementById('yesButton').style.transform = "scale(2)";
}
