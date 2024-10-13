(function() {
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.id = 'subscriptionOverlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;

    // Create popup content
    const popup = document.createElement('div');
    popup.style.cssText = `
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    `;

    popup.innerHTML = `
        <h2>Subscribe to Access Content</h2>
        <p>Please subscribe to view our content.</p>
        <form id="subscribeForm">
            <input type="email" id="emailInput" placeholder="Enter your email" required>
            <button type="submit">Subscribe</button>
        </form>
    `;

    overlay.appendChild(popup);

    // Function to check subscription status
    function checkSubscription() {
        const subscribed = localStorage.getItem('subscribed') === 'true';
        if (subscribed) {
            overlay.style.display = 'none';
        } else {
            overlay.style.display = 'flex';
        }
    }

    // Add event listener to form
    overlay.querySelector('#subscribeForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('emailInput').value;
        // Here you would typically send the email to your server
        console.log('Subscribed with email:', email);
        
        // For demo purposes, we'll just set a flag in localStorage
        localStorage.setItem('subscribed', 'true');
        checkSubscription();
    });

    // Add overlay to body when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        document.body.appendChild(overlay);
        checkSubscription();
    });
})();