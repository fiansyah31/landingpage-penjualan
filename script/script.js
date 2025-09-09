document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation
    const ctaButtons = document.querySelectorAll('.nav-cta, .primary-cta, .secondary-cta, .price-cta');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add animation when clicking buttons
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});