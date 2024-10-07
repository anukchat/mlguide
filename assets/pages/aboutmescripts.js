
document.addEventListener("DOMContentLoaded", function () {

    var newsletterForm = document.getElementById("newsletter-form");

    if (!newsletterForm) {
        console.error("Newsletter form not found!");
        return;
    }

    newsletterForm.addEventListener("submit", function (event) {
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

        xhr.onreadystatechange = function () {
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

        xhr.onerror = function () {
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

        setTimeout(function () {
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
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    gsap.from(".animate-text", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".animate-text",
            start: "top 80%",
        }
    });

    gsap.from(".animate-icons a", {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".animate-icons",
            start: "top 80%",
        }
    });

    gsap.from(".animate-section", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".animate-section",
            start: "top 80%",
        }
    });

    gsap.from(".timeline-item", {
        opacity: 0,
        x: index => index % 2 === 0 ? 50 : -50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".timeline",
            start: "top 80%",
        }
    });

    // Typing animation for the name
    gsap.to("#typed-name", {
        duration: 5,
        text: "Anukool Chaturvedi",
        ease: "none",
        repeat: -1,
        repeatDelay: 8,
        yoyo: false
    });

    gsap.to(".shape", {
        duration: 2,
        scale: 1.1,
        opacity: 0.8,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut",
        stagger: 0.2
    });

    function setupResponsiveTimeline() {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {
            gsap.utils.toArray(".timeline-item").forEach((item, i) => {
                gsap.from(item, {
                    opacity: 0,
                    x: i % 2 === 0 ? 50 : -50,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                    }
                });
            });
        });

        mm.add("(max-width: 768px)", () => {
            gsap.utils.toArray(".timeline-item").forEach((item) => {
                gsap.from(item, {
                    opacity: 0,
                    x: 50,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                    }
                });
            });
        });
    }

    setupResponsiveTimeline();
});