// Array of image URLs with updated paths (removed 'assets/' prefix)
const images = [
    { src: 'warm_hug.jpg', text: 'A warm hug to you!' },
    { src: 'my_presence.jpg', text: 'My presence is my present to you.' },
    { src: 'my_presence_red_sweater.jpg', text: 'Wrapped up and ready to celebrate with you.' },
    { src: 'sweet_kisses.png', text: 'Sweet kisses and holiday wishes!' }
];

// Function to display a random image and message
function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    
    const imageElement = document.getElementById('christmas-image');
    const textElement = document.getElementById('christmas-text');
    
    if (imageElement && textElement) {
        imageElement.src = selectedImage.src;
        imageElement.alt = selectedImage.text;
        textElement.textContent = selectedImage.text;
    }
}

// Display an image when the page loads
window.addEventListener('load', displayRandomImage);

// Optional: Allow clicking to get a new random image
document.addEventListener('click', function() {
    displayRandomImage();
});