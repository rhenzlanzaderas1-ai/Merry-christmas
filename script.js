// Get references to elements
const carousel = document.querySelector('.carousel');
const carouselImages = [
  'warm_hug.jpg',
  'my_presence.jpg',
  'my_presence_red_sweater.jpg',
  'sweet_kisses.png'
];

let currentImageIndex = 0;

// Function to update carousel image
function updateCarouselImage() {
  if (carousel) {
    carousel.style.backgroundImage = `url('${carouselImages[currentImageIndex]}')`;
  }
}

// Function to navigate carousel
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  updateCarouselImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
  updateCarouselImage();
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
  updateCarouselImage();

  // Add click handlers for carousel buttons if they exist
  const nextBtn = document.querySelector('.carousel-button.next');
  const prevBtn = document.querySelector('.carousel-button.prev');

  if (nextBtn) {
    nextBtn.addEventListener('click', nextImage);
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', prevImage);
  }

  // Auto-advance carousel every 5 seconds
  setInterval(nextImage, 5000);

  // Handle audio
  const audio = document.querySelector('audio');
  if (audio) {
    audio.src = 'music.mp3.mp3';
  }
});
