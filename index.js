// Welcome message when the user clicks the "Explore Our Snacks" button
document.querySelector('.explore-button').addEventListener('click', function() {
    alert('Welcome to the world of Crispy Crunch! Let\'s explore our delicious snacks!');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Fun animation for the product cards when hovering
const productCards = document.querySelectorAll('.product');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        card.classList.add('active');
    });

    card.addEventListener('mouseleave', function() {
        card.classList.remove('active');
    });
});

// Show a thank-you message when the contact form is submitted
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from actually submitting
    const name = document.querySelector('#name').value;
    alert(`Thank you, ${name}! We'll get back to you soon!`);
});
