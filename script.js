const 
    nav_button = document.querySelector('.nav_button'),
    header = document.querySelector('.header');

nav_button.addEventListener('click', function() {
    header.classList.toggle('active');
})