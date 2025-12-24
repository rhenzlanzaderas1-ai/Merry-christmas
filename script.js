// Array of image paths
const images = [
    "warm_hug.jpg",
    "my_presence.jpg",
    "my_presence_red_sweater.jpg",
    "sweet_kisses.png"
];

let currentImageIndex = 0;

// Function to change images
function changeImage() {
    const imgElement = document.getElementById('slideshowImage');
    imgElement.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Function to initialize the slideshow
function initializeSlideshow() {
    changeImage(); // Show the first image immediately
    setInterval(changeImage, 5000); // Change image every 5 seconds
}

// Function to play music
function playMusic() {
    const audio = document.getElementById('backgroundMusic');
    audio.src = 'music.mp3.mp3';
    audio.play();
}

// Function to stop music
function stopMusic() {
    const audio = document.getElementById('backgroundMusic');
    audio.pause();
    audio.currentTime = 0;
}

// Initialize slideshow when the page loads
window.addEventListener('load', initializeSlideshow);
