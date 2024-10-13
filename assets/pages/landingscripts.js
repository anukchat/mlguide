document.addEventListener("DOMContentLoaded", function() {
    var newsletterForm = document.getElementById("newsletter-form");
    
    if (!newsletterForm) {
        console.error("Newsletter form not found!");
        return;
    }

    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var form = this;
        var responseMessage = document.getElementById("response-message");
        var submitButton = document.getElementById("submit-button");

        if (!submitButton) {
            console.error("Submit button not found!");
            return;
        }

        var buttonText = submitButton.querySelector(".button-text");
        var loader = submitButton.querySelector(".loader");

        // Disable the button and show loader
        submitButton.disabled = true;
        if (buttonText) buttonText.style.display = "none";
        if (loader) loader.style.display = "inline-block";

        // Gather the form data
        var formData = new FormData(form);

        // Submit the form using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("POST", form.action, true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                submitButton.disabled = false;
                if (buttonText) buttonText.style.display = "inline";
                if (loader) loader.style.display = "none";

                if (xhr.status === 200) {
                    try {
                        var response = JSON.parse(xhr.responseText);
                        if (responseMessage) {
                            responseMessage.textContent = response.message;
                            responseMessage.style.display = "block";

                            if (response.result === "success") {
                                responseMessage.className = "response success-message";
                                form.reset();
                            } else if (response.result === "info") {
                                responseMessage.className = "response info-message";
                                form.reset();
                            } else {
                                responseMessage.className = "response error-message";
                            }

                            animateMessage(responseMessage);
                        }
                    } catch (error) {
                        handleError("Invalid response from server.");
                    }
                } else {
                    handleError("Oops! Something went wrong. Please try again later.");
                }
            }
        };

        xhr.onerror = function() {
            handleError("Network error. Please check your connection and try again.");
        };

        xhr.send(formData);
    });

    function handleError(message) {
        var responseMessage = document.getElementById("response-message");
        if (responseMessage) {
            responseMessage.textContent = message;
            responseMessage.className = "response error-message";
            responseMessage.style.display = "block";
            animateMessage(responseMessage);
        }
    }

    function animateMessage(element) {
        element.style.opacity = "0";
        element.style.transform = "translateY(-20px)";
        element.style.transition = "opacity 0.5s, transform 0.5s";
        
        setTimeout(function() {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, 10);
    }

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