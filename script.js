// Function to handle the CTA Button click
const ctaButton = document.getElementById('cta-btn');

ctaButton.addEventListener('click', () => {
    alert("Thank you for your interest! Redirecting to projects...");
    window.location.href = "#skills";
});

// Image animation: Zoom on hover
const profileImg = document.getElementById('profile-pic');

profileImg.addEventListener('mouseenter', () => {
    profileImg.style.transform = "scale(1.05) rotate(2deg)";
});

profileImg.addEventListener('mouseleave', () => {
    profileImg.style.transform = "scale(1) rotate(0deg)";
});

// Smooth scroll logic for navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
