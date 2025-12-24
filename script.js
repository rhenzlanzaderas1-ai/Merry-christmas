// Get all buttons
const buttons = document.querySelectorAll('.button');
const canvas = document.getElementById('snow-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size to window size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Snowflake array
let snowflakes = [];

// Snowflake class
class Snowflake {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 5 + 2;
    this.radius = Math.random() * 3 + 2;
    this.opacity = Math.random() * 0.5 + 0.5;
  }

  draw() {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx += (Math.random() - 0.5) * 0.1;
    this.vx = Math.max(-5, Math.min(5, this.vx));

    if (this.y > canvas.height) {
      this.y = -10;
      this.x = Math.random() * canvas.width;
    }

    if (this.x < 0) {
      this.x = canvas.width;
    } else if (this.x > canvas.width) {
      this.x = 0;
    }
  }
}

// Create snowflakes
function createSnowflakes(count) {
  for (let i = 0; i < count; i++) {
    snowflakes.push(new Snowflake());
  }
}

// Animate snowflakes
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snowflakes.forEach((snowflake) => {
    snowflake.update();
    snowflake.draw();
  });

  requestAnimationFrame(animate);
}

// Initialize
createSnowflakes(100);
animate();

// Button functionality
buttons.forEach((button) => {
  button.addEventListener('click', function () {
    const imagePath = this.getAttribute('data-image');
    const imageTitle = this.getAttribute('data-title');
    const imageDescription = this.getAttribute('data-description');

    // Show image modal
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    modalImage.src = imagePath;
    modalTitle.textContent = imageTitle;
    modalDescription.textContent = imageDescription;
    modal.style.display = 'block';
  });
});

// Close modal functionality
const modal = document.getElementById('image-modal');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
