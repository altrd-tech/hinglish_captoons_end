document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const emoji = document.querySelector('.emoji');
    
    // Fade in animation
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
    
    // Emoji click animation
    emoji.addEventListener('click', function() {
        this.style.transform = 'scale(1.2) rotate(10deg)';
        this.style.transition = 'transform 0.3s ease';
        
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    });
    
    console.log('Yeh app band ho gaya yaar! 😅');
});