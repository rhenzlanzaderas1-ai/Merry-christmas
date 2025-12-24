const gifts = [
    { text: "a warm hug", image: "warm_hug.jpg" },
    { text: "my presence", image: "my_presence.jpg" },
    { text: "my presence (in a red sweater)", image: "my_presence_red_sweater.jpg" },
    { text: "sweet kisses", image: "sweet_kisses.png" }
];

const audioSource = "music.mp3.mp3";

function displayGift() {
    const randomIndex = Math.floor(Math.random() * gifts.length);
    const selectedGift = gifts[randomIndex];
    
    const giftContainer = document.getElementById('gift-container');
    giftContainer.innerHTML = `
        <div class="gift-box">
            <img src="${selectedGift.image}" alt="${selectedGift.text}">
            <p>${selectedGift.text}</p>
        </div>
    `;
    
    // Play audio
    const audio = new Audio(audioSource);
    audio.play();
}

document.addEventListener('DOMContentLoaded', function() {
    const giftButton = document.getElementById('gift-button');
    if (giftButton) {
        giftButton.addEventListener('click', displayGift);
    }
});