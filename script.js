function moveButton() {
    const noBtn = document.getElementById('noButton');
    
    // Calculate new position within the screen boundaries
    // We subtract button size so it doesn't go off edge
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

function celebrate() {
    // Change text and GIF
    document.getElementById('question').innerHTML = "Yay! Best Valentine ever! 😘";
    document.getElementById('main-image').src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHYybmZueXh6Z3R3eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/KZTic7sqK6iL21yq9O/giphy.gif";
    
    // Hide the No button and center the Yes button
    document.getElementById('noButton').style.display = 'none';
    const yesBtn = document.getElementById('yesButton');
    yesBtn.style.transform = "scale(1.5)";
}