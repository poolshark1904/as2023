document.getElementById("santaForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then(response => response.json())  // Parse the JSON response
    .then(data => {
        displayMessage(data);
    })
    .catch(error => console.error('Error:', error));
});

function displayMessage(data) {
    var messageContainer = document.getElementById("message");
    
    if (data.status === "success") {
        // If the status is "success", hide the form
        document.getElementById("santaForm").style.display = "none";
    } else {
        // If there is an error, clear the email field and focus on it
        document.getElementById("email").value = "";
        document.getElementById("email").focus();
    }

    // Display the message from the server
    messageContainer.innerHTML = data.message;
    messageContainer.style.display = "block";
}


