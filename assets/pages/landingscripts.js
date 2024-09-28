document.getElementById("newsletter-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission

    var form = this;
    var responseMessage = document.getElementById("response-message");
    var submitButton = document.getElementById("submit-button");
    var buttonText = submitButton.querySelector(".button-text");
    var loader = submitButton.querySelector(".loader");

    submitButton.disabled = true;
    buttonText.style.display = "none";
    loader.style.display = "inline-block";

    // Submit the form using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Gather the form data
    var formData = new FormData(form);
    var params = new URLSearchParams(formData).toString();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            submitButton.disabled = false;
            buttonText.style.display = "inline";
            loader.style.display = "none";

            if (xhr.status === 200) {
                // Parse the JSON response
                var response = JSON.parse(xhr.responseText);

                // Display the message from the script
                responseMessage.textContent = response.message;
                responseMessage.style.display = "block";

                if (response.result === "success") {
                    responseMessage.className = "response success-message";
                    form.style.display = "none";
                } else if (response.result === "info") {
                    responseMessage.className = "response success-message";
                }
                else {
                    responseMessage.className = "response error-message";
                }
            } else {
                // Display a generic error message if submission fails
                responseMessage.textContent = "Oops! Something went wrong. Please try again later.";
                responseMessage.className = "response error-message";
                responseMessage.style.display = "block";
            }
        }
    };

    xhr.send(params);
});