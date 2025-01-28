document.addEventListener("DOMContentLoaded", function() {
    // Remove newsletter form handling code
    
    // Keep only the necessary features
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate journey cards on scroll
    const journeyCards = document.querySelectorAll('.journey-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    journeyCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.5s, transform 0.5s";
        observer.observe(card);
    });

    document.addEventListener('DOMContentLoaded', function() {
        const overlay = document.getElementById('subscribeOverlay');
        const form = document.getElementById('popupSubscribeForm');

        function checkSubscription() {
            // Send message to parent window to check subscription status
            window.parent.postMessage('checkSubscription', '*');
        }

        // Listen for messages from the parent window
        window.addEventListener('message', function(event) {
            if (event.data === 'subscribed') {
                overlay.classList.add('hidden');
            } else if (event.data === 'notSubscribed') {
                overlay.classList.remove('hidden');
            }
        });

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('popupEmail').value;
            // Send subscription request to parent window
            window.parent.postMessage({type: 'subscribe', email: email}, '*');
        });

        // Check subscription status when the page loads
        checkSubscription();
    });
});