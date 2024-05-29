document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navVisible = document.querySelector('.nav-visible');
    const navHidden = document.querySelector('.nav-hidden');
    
    
    hamburgerIcon.addEventListener('click', function() {
        navVisible.classList.toggle('nav-hidden');
    });
 
    closeIcon.addEventListener('click', function() {
        navVisible.classList.toggle('nav-hidden');
    });
});

        
