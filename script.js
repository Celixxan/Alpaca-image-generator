// JavaScript for Alpaca Image Generator

const alpacaImages = [
    'alpaca1.png',
    'alpaca2.png',
    'alpaca3.png',
    'alpaca4.png',
    'alpaca5.png'
];

const alpacaImageElement = document.getElementById('alpacaImage');
const randomizeButton = document.getElementById('randomizeButton');
const downloadButton = document.getElementById('downloadButton');

// Function to randomize the alpaca image
function randomizeAlpaca() {
    const randomIndex = Math.floor(Math.random() * alpacaImages.length);
    alpacaImageElement.src = alpacaImages[randomIndex];
}

// Function to download the generated image
function downloadImage() {
    const link = document.createElement('a');
    link.href = alpacaImageElement.src;
    link.download = 'custom-alpaca.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Event listeners
randomizeButton.addEventListener('click', randomizeAlpaca);
downloadButton.addEventListener('click', downloadImage);
