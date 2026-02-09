// --- Bouncing Photo Logic (Keep this as is) ---
let posX = Math.random() * (window.innerWidth - 120);
let posY = Math.random() * (window.innerHeight - 120);
let velX = 2; 
let velY = 2; 

function animate() {
    const photo = document.getElementById('bouncing-photo');
    if(!photo) return;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const photoSize = 120;
    posX += velX;
    posY += velY;
    if (posX + photoSize >= screenWidth || posX <= 0) velX *= -1;
    if (posY + photoSize >= screenHeight || posY <= 0) velY *= -1;
    photo.style.left = posX + 'px';
    photo.style.top = posY + 'px';
    requestAnimationFrame(animate);
}
animate();

// --- Button & Music Logic ---
function moveButton() {
    const music = document.getElementById('bgMusic');
    music.play();

    const noBtn = document.getElementById('noButton');
    
    // This removes the "centering" from CSS so it can move freely
    noBtn.style.transform = "none";
    noBtn.style.bottom = "auto"; 

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

function celebrate() {
    const music = document.getElementById('bgMusic');
    music.play();

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffafcc']
    });

    document.getElementById('question').innerHTML = "Yay! See you on the 14th! 😘";
    document.getElementById('name-greeting').innerHTML = "I Love You!";
    
    const noBtn = document.getElementById('noButton');
    if(noBtn) noBtn.remove();
    
    document.getElementById('yesButton').style.transform = "scale(1.5)";
}
