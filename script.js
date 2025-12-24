// Gift and Letter Functionality
const gifts = [
    { id: 1, name: "Warm Hug", image: "warm_hug.jpg", description: "A cozy warm embrace just for you" },
    { id: 2, name: "My Presence", image: "my_presence.jpg", description: "I'm here for you, always" },
    { id: 3, name: "Presence in Red Sweater", image: "my_presence_red_sweater.jpg", description: "Looking festive just for you" }
];

const letters = [
    { id: 1, title: "Merry Christmas", content: "Wishing you a magical Christmas filled with love, laughter, and joy!" },
    { id: 2, title: "A Special Message", content: "Thank you for being the most wonderful person in my life. This Christmas, I celebrate you." },
    { id: 3, title: "Forever & Always", content: "With you, every moment feels like Christmas morning. Here's to our beautiful journey together." }
];

// DOM Elements
const giftBox = document.getElementById('giftBox');
const letterBox = document.getElementById('letterBox');
const giftContainer = document.getElementById('giftContainer');
const letterContainer = document.getElementById('letterContainer');
const audioPlayer = document.getElementById('audioPlayer');

// Initialize
function init() {
    displayGifts();
    displayLetters();
    setupAudio();
}

// Display Gifts
function displayGifts() {
    if (giftContainer) {
        giftContainer.innerHTML = gifts.map(gift => `
            <div class="gift-item" onclick="openGift(${gift.id})">
                <div class="gift-image">
                    <img src="${gift.image}" alt="${gift.name}">
                </div>
                <div class="gift-info">
                    <h3>${gift.name}</h3>
                    <p>${gift.description}</p>
                </div>
            </div>
        `).join('');
    }
}

// Display Letters
function displayLetters() {
    if (letterContainer) {
        letterContainer.innerHTML = letters.map(letter => `
            <div class="letter-item" onclick="openLetter(${letter.id})">
                <div class="letter-envelope">
                    <span class="letter-title">${letter.title}</span>
                </div>
            </div>
        `).join('');
    }
}

// Open Gift
function openGift(id) {
    const gift = gifts.find(g => g.id === id);
    if (gift) {
        alert(`🎁 ${gift.name}\n\n${gift.description}`);
    }
}

// Open Letter
function openLetter(id) {
    const letter = letters.find(l => l.id === id);
    if (letter) {
        alert(`💌 ${letter.title}\n\n${letter.content}`);
    }
}

// Setup Audio
function setupAudio() {
    if (audioPlayer) {
        audioPlayer.src = 'music.mp3';
        audioPlayer.loop = true;
    }
}

// Toggle Audio
function toggleAudio() {
    if (audioPlayer) {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);