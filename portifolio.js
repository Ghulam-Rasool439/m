// Contact form functionality
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! I will get back to you soon.');
});

// // Toggle hamburger menu and menu overlay
// document.getElementById('hamburger').addEventListener('click', function () {
//     const menuOverlay = document.getElementById('menu-overlay');
//     menuOverlay.classList.toggle('show');
//     this.classList.toggle('close'); // Toggle close (X) icon
// });

const hamburger = document.getElementById('hamburger');
const links = document.getElementById('nav-links');
const cross = document.getElementById('cross');

hamburger.addEventListener('click', () => {
    links.classList.add('active'); // Add 'active' class to show the menu
});

cross.addEventListener('click', () => {
    links.classList.remove('active'); // Remove 'active' class to hide the menu
});


const typingText = document.getElementById("typing-text");
const textToType = ["Mr.Ghulam Rasool", "Front-End Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;
let pauseAfterTyping = 3000;

function typeText() {
    const currentText = textToType[textIndex];
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 100;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = pauseAfterTyping; // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textToType.length; // Move to the next string
        typingSpeed = 300; // Pause before typing the next text
    }

    setTimeout(typeText, typingSpeed);
}

document.addEventListener("DOMContentLoaded", function() {
    typeText();
});
