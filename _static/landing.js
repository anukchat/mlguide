
// This script should be added to the parent Jupyter Book page

// Function to check if user is subscribed (replace with your actual check)
function isSubscribed() {
    return localStorage.getItem('subscribed') === 'true';
}

// Listen for messages from the iframe
window.addEventListener('message', function(event) {
    if (event.data === 'checkSubscription') {
        const subscriptionStatus = isSubscribed() ? 'subscribed' : 'notSubscribed';
        event.source.postMessage(subscriptionStatus, '*');
    } else if (event.data.type === 'subscribe') {
        // Handle subscription (replace with your actual subscription logic)
        console.log('Subscribing email:', event.data.email);
        localStorage.setItem('subscribed', 'true');
        event.source.postMessage('subscribed', '*');
    }
});