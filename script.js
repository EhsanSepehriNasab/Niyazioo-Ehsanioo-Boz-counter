// script.js
let coinCount = 0;
const quotes = [
    "Your love is my anchor.",
    "You are the best part of my day.",
    "I am head over heels for you.",
    "You are my forever and always.",
    "Your love is my greatest gift.",
    "You make my life amazing.",
    "Every day is better with you.",
    "You are my heart’s greatest joy.",
    "I cherish every moment with you.",
    "You are my constant joy.",
    "Your love is my greatest blessing.",
    "You are my sunshine on a rainy day.",
    "I am grateful for you every day.",
    "You are my heart’s deepest desire.",
    "Your love is my greatest comfort.",
    "You are the light in my life.",
    "I am so happy with you.",
    "You make every day brighter.",
    "You are my true love.",
    "I adore you more every day.",
    "You are my sweetest dream.",
    "I love you to the moon and back.",
    "You are my heart’s song.",
    "You are my one and only.",
    "I am so blessed to have you.",
    "You are my everything and more.",
    "You make my world beautiful.",
    "You are my forever love.",
    "I cherish our time together.",
    "You are my heart’s delight.",
    "You make every moment special.",
    "I am so grateful for you.",
    "You are my greatest love.",
    "Your love is my greatest joy.",
    "You make my life wonderful.",
    "I am yours forever.",
    "You are my sweetest blessing.",
    "You bring out the best in me.",
    "I am so lucky to have your love.",
    "You are my one true love.",
    "I love you more than anything.",
    "You are my heart’s treasure.",
    "You complete my world.",
    "I am so happy to be with you.",
    "You are my heart’s joy.",
    "You make me feel cherished.",
    "I am so in love with you.",
    "You are my favorite person.",
    "You bring so much joy into my life.",
    "You are my everything.",
    "I am grateful for your love.",
    "You are my heart’s delight.",
    "You make every day special.",
    "You are my forever.",
    "I cherish our time together.",
    "You are my greatest gift.",
    "I love you more each day.",
    "You are my heart’s desire.",
    "You are my happiness.",
    "I am so thankful for you.",
    "You make my life complete.",
    "You are my love and joy.",
    "You are the reason I smile.",
    "I am blessed to have you.",
    "You are my everything.",
    "You make every day amazing.",
    "You are my heart’s treasure.",
    "I am so happy with you.",
    "You are my one true love.",
    "You make my world beautiful.",
    "I cherish you more than words.",
    "You are my heart’s delight.",
    "You are my greatest joy.",
    "I love you to infinity.",
    "You are my reason for living.",
    "You are my forever love.",
    "I am so blessed to have you.",
    "You make every day brighter.",
    "You are my heart’s treasure.",
    "I adore you more each day.",
    "You complete my world.",
    "You are my love and joy.",
    "I am grateful for your love.",
    "You make my life wonderful.",
    "You are my everything.",
    "I am so lucky to be with you.",
    "You are my heart’s joy.",
    "You make me feel cherished.",
    "I love you more than anything.",
    "You are my sweetest dream.",
    "I am yours forever.",
    "You are my favorite person.",
    "You bring so much joy into my life.",
    "You are my heart’s desire.",
    "I cherish every moment with you.",
    "You are my forever.",
    "You make every day special.",
    "I am so happy with you.",
    "You are my greatest gift.",
    "You are my one true love.",
    "I love you to the moon and back.",
    "You are my heart’s song.",
    "You are my everything and more.",
    "I am so blessed to have you.",
    "You are my heart’s delight.",
    "You make my world complete.",
    "I am grateful for you every day.",
    "You are my greatest joy.",
    "You bring out the best in me.",
    "I love you more than words can express.",
    "You are my sunshine.",
    "You are my forever love.",
    "I am so in love with you.",
    "You are my heart’s desire.",
    "You make every day better.",
    "You are my love and joy.",
    "I cherish you more each day.",
    "You are my heart’s treasure.",
    "You make my life beautiful.",
    "You are my one and only.",
    "I am so grateful for you.",
    "You are my everything.",
    "You make my world brighter.",
    "You are my sweetest love.",
    "I love you to infinity and beyond.",
    "You are my heart’s delight.",
    "You are my forever.",
    "I cherish every moment with you.",
    "You are my greatest joy.",
    "You make my life complete.",
    "I am so blessed to have you.",
    "You are my heart’s song.",
    "You make every day special.",
    "You are my true love.",
    "I am so happy to be with you.",
    "You are my favorite person.",
    "You bring so much joy into my life.",
    "I love you more each day.",
];

function incrementCoins() {
    coinCount++;
    updateCoinCounter();
    showKissEmoji();
    changeQuote();
}

function updateCoinCounter() {
    document.getElementById('coin-counter').innerText = `Kiss Counter: ${coinCount}`;
    localStorage.setItem('coinCount', coinCount); // Save to local storage
}

function showKissEmoji() {
    const kissEmoji = document.getElementById('kiss-emoji');
    kissEmoji.classList.remove('fade-out'); // Ensure fade-out class is removed
    kissEmoji.classList.add('fade-in');
    
    // Ensure the emoji is visible before starting the animation
    kissEmoji.style.opacity = '1';
    kissEmoji.style.transform = 'scale(1)'; 

    // Hide the emoji after the fade-in animation ends
    kissEmoji.addEventListener('animationend', () => {
        kissEmoji.classList.remove('fade-in');
        kissEmoji.classList.add('fade-out');
    }, { once: true });

    // Ensure the emoji is completely hidden after the fade-out animation ends
    kissEmoji.addEventListener('animationend', () => {
        kissEmoji.style.opacity = '0';
        kissEmoji.style.transform = 'scale(0)';
    }, { once: true });
}

function changeQuote() {
    const quoteElement = document.getElementById('quote');
    
    // Add shake animation
    quoteElement.classList.add('shake');
    
    // Fade out the current quote
    quoteElement.classList.add('fade-out');
    
    // Wait for the fade-out animation to complete
    setTimeout(() => {
        // Set a new quote
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.innerText = randomQuote;
        
        // Remove shake animation class
        quoteElement.classList.remove('shake');
        
        // Fade in the new quote
        quoteElement.classList.remove('fade-out');
        quoteElement.classList.add('fade-in');
        
        // Reset the fade-in animation
        quoteElement.addEventListener('animationend', () => {
            quoteElement.classList.remove('fade-in');
        }, { once: true });
    }, 600); // Match the duration of the shake animation
}

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve coin count from local storage
    const storedCoinCount = localStorage.getItem('coinCount');
    coinCount = storedCoinCount ? parseInt(storedCoinCount, 10) : 0;
    updateCoinCounter();

    // Display a random love quote on page load
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').innerText = randomQuote;

    // Set a random cat gif background on page load
    const catGifs = [
        'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/cat-staring-at-the-universe-johnnie-art.jpg',
        'https://media.tenor.com/wSJZSQqIHhUAAAAM/love-cats-cat.gif',
        'https://m.media-amazon.com/images/I/51FFgieTJYL._AC_UF1000,1000_QL80_.jpg',
        'https://i.imgur.com/GeKlEMV.gif',
        'https://cdn.shopify.com/s/files/1/0344/6469/files/cat-hug-6.gif?v=1527883368'
    ];
    const randomGif = catGifs[Math.floor(Math.random() * catGifs.length)];
    document.getElementById('background').style.backgroundImage = `url(${randomGif})`;

    // Start generating falling emojis
    setInterval(generateFallingEmoji, 500);
});

function generateFallingEmoji() {
    const emojis = ['💋', '❤️', '😘', '🌹', '💖'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const span = document.createElement('span');
    span.innerText = emoji;
    span.className = 'falling-emoji';
    span.style.left = Math.random() * 100 + 'vw';
    span.style.top = Math.random() * -100 + 'vh'; // Start from above the viewport

    document.getElementById('falling-emojis').appendChild(span);

    // Remove emoji after animation
    span.addEventListener('animationend', () => {
        span.remove();
    });
}
