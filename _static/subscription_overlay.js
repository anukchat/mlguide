(function () {
    console.log("Subscription Overlay Script Loaded");

    // Function to inject CSS into the document
    function injectCSS() {
        const style = document.createElement('style');
        style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        :root {
            --primary-color: #4a4e69;
            --secondary-color: #9a8c98;
            --accent-color: #c9ada7;
            --background-color: #ffffff;
            --text-color: #22223b;
            --card-bg-color: #f8f9fa;
            --card-border-color: #e9ecef;
            --text-color-logo-blue: #448CFF;
            --text-color-logo-yellow: #FEC000;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--background-color);
        }

        /* Subscription Overlay Styles */
        #subscriptionOverlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }

        #subscriptionOverlay .popup {
            background-color: var(--background-color);
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 0 20px rgba(0,0,0,0.2);
            max-width: 38%;
            width: 90%;
            position: relative;
            transform: scale(0.8);
            opacity: 0;
            transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
            font-family: 'Poppins', sans-serif;
        }

        #subscriptionOverlay .close-button {
            position: absolute;
            top: 10px;
            right: 15px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: var(--text-color);
            z-index: 1;
        }

        #subscriptionOverlay h2 {
            color: var(--primary-color);
            font-size: 24px;
            margin-top: 20px;
            margin-bottom: 20px;
        }

        #subscriptionOverlay p {
            color: var(--secondary-color);
            margin-bottom: 20px;
            font-size: 16px;
        }

        #subscriptionOverlay form {
            display: flex;
            flex-direction: column;
            align-items: stretch;
        }

        #subscriptionOverlay .form-group {
            position: relative;
            display: flex;
            border-radius: 50px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease;
        }

        #subscriptionOverlay .form-group:focus-within {
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }

        #subscriptionOverlay input[type="email"] {
            flex-grow: 1;
            border: none;
            padding: 15px 20px;
            font-size: 16px;
            outline: none;
            background-color: var(--card-bg-color);
        }

        #subscriptionOverlay input[type="email"]::placeholder {
            color: var(--secondary-color);
        }

        #subscriptionOverlay button[type="submit"] {
            border: none;
            background-color: var(--text-color-logo-blue);
            color: var(--background-color);
            padding: 15px 25px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-weight: 600;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #subscriptionOverlay button[type="submit"]:hover {
            background-color: var(--primary-color);
        }

        #subscriptionOverlay .loader {
            display: none;
            width: 20px;
            height: 20px;
            border: 2px solid var(--background-color);
            border-top: 2px solid transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-left: 10px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        #subscriptionOverlay .response {
            margin-top: 1rem;
            padding: 10px 15px;
            border-radius: 5px;
            font-weight: 500;
            text-align: center;
            opacity: 0;
            transform: translateY(-10px);
            transition: opacity 0.3s ease, transform 0.3s ease;
            font-size: 14px;
        }

        #subscriptionOverlay .response.show {
            opacity: 1;
            transform: translateY(0);
        }

        #subscriptionOverlay .success-message {
            background-color: #d4edda;
            color: #155724;
        }

        #subscriptionOverlay .error-message {
            background-color: #f8d7da;
            color: #721c24;
        }

        #subscriptionOverlay .info-message {
            background-color: #cce5ff;
            color: #004085;
        }

        /* Responsive Design for Overlay */
        @media (max-width: 768px) {
            #subscriptionOverlay .popup {
                padding: 1.5rem;
            }

            #subscriptionOverlay h2 {
                font-size: 20px;
            }

            #subscriptionOverlay p {
                font-size: 14px;
            }

            #subscriptionOverlay input[type="email"],
            #subscriptionOverlay button[type="submit"] {
                padding: 12px 15px;
                font-size: 14px;
            }
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        #subscriptionOverlay .popup {
            animation: fadeInUp 0.6s ease-out;
        }

        /* Modern animations */
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.10);
            }
            100% {
                transform: scale(1);
            }
        }

        #subscribeForm .form-group button {
            animation: pulse 2s infinite;
        }
        `;

        document.head.appendChild(style);
        console.log("CSS injected into the document");
    }

    // Function to create and append the overlay to the body
    function createOverlay() {

        // Create overlay element
        const overlay = document.createElement('div');
        overlay.id = 'subscriptionOverlay';

        // Create popup content
        const popup = document.createElement('div');
        popup.classList.add('popup');

        // Close button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.classList.add('close-button');
        closeButton.addEventListener('click', hideOverlay);
        popup.appendChild(closeButton);

        // Create a container for the popup content
        const popupContent = document.createElement('div');
        popupContent.innerHTML = `
            <h2>Subscribe to Start Your Journey 🚀</h2>
            <p>Get access to exclusive Machine Learning Guide for FREE!</p>
            <form id="subscribeForm">
                <div class="form-group" id="formGroup">
                    <input type="email" id="emailInput" name="email" placeholder="Enter your email" required>
                    <button type="submit" id="subscribeButton">
                        <span class="button-text">Subscribe</span>
                        <span class="loader"></span>
                    </button>
                </div>
                <div id="responseMessage" class="response"></div>
            </form>
        `;
        popup.appendChild(popupContent);
        overlay.appendChild(popup);

        // Append overlay to body
        document.body.appendChild(overlay);
    }

    // Function to show overlay with animation
    function showOverlay() {
        console.log("Attempting to show overlay");
        const isSubscribed = localStorage.getItem('subscribed') === 'true';
        const isOverlayClosed = sessionStorage.getItem('overlayClosed') === 'true';
        console.log(`Subscribed: ${isSubscribed}, Overlay Closed: ${isOverlayClosed}`);

        if (!isSubscribed && !isOverlayClosed) {
            const overlay = document.getElementById('subscriptionOverlay');
            if (overlay) {
                overlay.style.display = 'flex';
                setTimeout(() => {
                    overlay.style.opacity = '1';
                    overlay.querySelector('.popup').style.transform = 'scale(1)';
                    overlay.querySelector('.popup').style.opacity = '1';
                    console.log("Overlay displayed");
                }, 10);
            } else {
                console.error("Overlay element not found.");
            }
        } else {
            console.log("Overlay not displayed due to subscription status or session state");
        }
    }

    // Function to hide overlay with animation
    function hideOverlay() {
        console.log("Hiding overlay");
        const overlay = document.getElementById('subscriptionOverlay');
        if (overlay) {
            overlay.style.opacity = '0';
            overlay.querySelector('.popup').style.transform = 'scale(0.8)';
            overlay.querySelector('.popup').style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
                console.log("Overlay hidden");
            }, 300);
            sessionStorage.setItem('overlayClosed', 'true');
        } else {
            console.error("Overlay element not found.");
        }
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Function to handle subscription via AJAX
    function handleSubscription(email) {
        console.log(`Handling subscription for email: ${email}`);
        const subscribeButton = document.getElementById('subscribeButton');
        const buttonText = subscribeButton.querySelector('.button-text');
        const loader = subscribeButton.querySelector('.loader');
        const responseMessage = document.getElementById('responseMessage');
        const formGroup = document.getElementById('formGroup');

        // Disable the button and show loader
        subscribeButton.disabled = true;
        if (buttonText) buttonText.style.display = "none";
        if (loader) loader.style.display = "inline-block";
        console.log("Subscribe button disabled and loader shown");

        // Prepare form data
        const formData = new FormData();
        formData.append('email', email);

        // Send AJAX request
        fetch('https://script.google.com/macros/s/AKfycbwsuzzbDdoBF2waCBNV95xc-bBMOHKmoiVTuI1sqzc4yfLij75kAmIc_DY1xwYPPbSiiA/exec', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            console.log(`Received response with status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            console.log("Subscription response data:", data);
            // Enable the button and hide loader
            subscribeButton.disabled = false;
            if (buttonText) buttonText.style.display = "inline";
            if (loader) loader.style.display = "none";
            console.log("Subscribe button enabled and loader hidden");

            if (data.result === "success") {
                // Hide the form inputs and button
                formGroup.style.display = 'none';

                // Show success message
                responseMessage.textContent = data.message || "Thank you for subscribing!";
                responseMessage.className = "response success-message show";
                localStorage.setItem('subscribed', 'true');

                // Optionally hide the overlay after showing the message
                setTimeout(() => {
                    hideOverlay();
                }, 3000);
            } else if (data.result === "info") {
                responseMessage.textContent = data.message || "You are already subscribed.";
                responseMessage.className = "response info-message show";
            } else {
                responseMessage.textContent = data.message || "An error occurred. Please try again.";
                responseMessage.className = "response error-message show";
            }

            animateMessage(responseMessage);
        })
        .catch(error => {
            console.error('Subscription Error:', error);
            // Enable the button and hide loader
            subscribeButton.disabled = false;
            if (buttonText) buttonText.style.display = "inline";
            if (loader) loader.style.display = "none";

            responseMessage.textContent = "Network error. Please try again later.";
            responseMessage.className = "response error-message show";
            animateMessage(responseMessage);
        });
    }

    // Function to animate response messages
    function animateMessage(element) {
        console.log("Animating message");
        // Ensure the message is visible with animation
        element.classList.add('show');
    }

    // Add event listener to form
    function addFormListener() {
        const subscribeForm = document.getElementById('subscribeForm');
        if (subscribeForm) {
            subscribeForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const email = document.getElementById('emailInput').value;
                console.log(`Form submitted with email: ${email}`);
                if (validateEmail(email)) {
                    handleSubscription(email);
                } else {
                    const responseMessage = document.getElementById('responseMessage');
                    responseMessage.textContent = 'Please enter a valid email address.';
                    responseMessage.className = "response error-message show";
                    animateMessage(responseMessage);
                }
            });
            console.log("Form listener added");
        } else {
            console.error('Subscribe form not found.');
        }
    }

    // Initialize the overlay after DOM is fully loaded
    function initializeOverlay() {
        injectCSS();
        createOverlay();
        addFormListener();

        // Only show popup if it hasn't been closed this session
        const isOverlayClosed = sessionStorage.getItem('overlayClosed') === 'true';
        const isSubscribed = localStorage.getItem('subscribed') === 'true';
        // console.log(`Initial Check - Subscribed: ${isSubscribed}, Overlay Closed: ${isOverlayClosed}`);

        if (!isOverlayClosed && !isSubscribed) {
            // Show popup after 10 seconds on the landing page
            setTimeout(() => {
                showOverlay();
            }, 10000);

            // Trigger on scroll to bottom of the landing page
            window.addEventListener('scroll', function () {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
                    // console.log("Scrolled to bottom: Showing overlay");
                    setTimeout(showOverlay, 2000); 
                    showOverlay();
                }
            });

            // Trigger on navigation (for Single Page Applications)
            window.addEventListener('popstate', function () {
                // console.log("Popstate event: Showing overlay after delay");
                setTimeout(showOverlay, 10000); // 10 seconds delay after navigation
            });

            // For non-SPA sites, use MutationObserver to detect page changes
            const observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.type === 'childList') {
                        // console.log("DOM mutation detected: Showing overlay after delay");
                        setTimeout(showOverlay, 5000); // 5 seconds delay after page change
                    }
                });
            });

            observer.observe(document.body, { childList: true, subtree: true });
            // console.log("MutationObserver set up");

            // Exit intent detection
            document.addEventListener('mouseleave', function (e) {
                if (e.clientY < 0) {
                    // console.log("Exit intent detected: Showing overlay");
                    setTimeout(showOverlay, 2000);
                    showOverlay();
                }
            });
        } else {
            console.log("Overlay has been closed this session or user is subscribed");
        }
    }

    // Listen for DOMContentLoaded to initialize the overlay
    document.addEventListener('DOMContentLoaded', initializeOverlay);
})();
