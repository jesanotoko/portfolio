// 1. Toggle Dark Mode and Light Mode
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Update button text
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
});

// 2. Show greeting message on button click
const greetBtn = document.getElementById('greet-btn');
const greetMessage = document.getElementById('greet-message');

greetBtn.addEventListener('click', function() {
    greetMessage.textContent = "Welcome to Mohibul Haque Jesan's portfolio! Thanks for visiting. 😊";
});