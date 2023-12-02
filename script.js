document.getElementById("santaForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then(response => response.text())  // Parse the HTML response
    .then(data => {
        displayMessage(data);
    })
    .catch(error => console.error('Error:', error));
});

function displayMessage(data) {
    var messageContainer = document.getElementById("message");
    
    // Display the HTML content directly
    messageContainer.innerHTML = data;
    messageContainer.style.display = "block";
}

