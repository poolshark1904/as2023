document.getElementById("santaForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then(response => response.text())
    .then(message => {
        displayMessage(message);
    })
    .catch(error => console.error('Error:', error));
});

function displayMessage(message) {
    var messageContainer = document.getElementById("message");
    messageContainer.innerHTML = message;

    if (message.includes("bem-sucedida")) {
        // If the message indicates success, hide the form
        document.getElementById("santaForm").style.display = "none";
    } else {
        // If there is an error, clear the email field and focus on it
        document.getElementById("email").value = "";
        document.getElementById("email").focus();
    }

    // Display the message container
    messageContainer.style.display = "block";
}
