document.addEventListener('DOMContentLoaded', function() {
    const gifts = [
        { id: 'gift1', image: 'warm_hug.jpg', title: 'A Warm Hug' },
        { id: 'gift2', image: 'my_presence.jpg', title: 'My Presence' },
        { id: 'gift3', image: 'my_presence_red_sweater.jpg', title: 'My Presence in Red Sweater' },
        { id: 'gift4', image: 'sweet_kisses.png', title: 'Sweet Kisses' }
    ];

    const letters = [
        {
            id: 'letter1',
            title: 'Letter 1',
            content: 'Dear love, this Christmas is special because you are here with me...'
        },
        {
            id: 'letter2',
            title: 'Letter 2',
            content: 'Every moment with you feels like a gift wrapped in joy...'
        },
        {
            id: 'letter3',
            title: 'Letter 3',
            content: 'You make my Christmas complete just by being yourself...'
        }
    ];

    function displayGifts() {
        const giftsContainer = document.getElementById('giftsContainer');
        gifts.forEach(gift => {
            const giftDiv = document.createElement('div');
            giftDiv.className = 'gift';
            giftDiv.innerHTML = `
                <img src="${gift.image}" alt="${gift.title}">
                <p>${gift.title}</p>
            `;
            giftsContainer.appendChild(giftDiv);
        });
    }

    function displayLetters() {
        const lettersContainer = document.getElementById('lettersContainer');
        letters.forEach(letter => {
            const letterDiv = document.createElement('div');
            letterDiv.className = 'letter';
            letterDiv.innerHTML = `
                <h3>${letter.title}</h3>
                <p>${letter.content}</p>
            `;
            lettersContainer.appendChild(letterDiv);
        });
    }

    function init() {
        displayGifts();
        displayLetters();
    }

    init();
});
