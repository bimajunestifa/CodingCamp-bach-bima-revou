// Ensure DOM is ready before accessing elements
document.addEventListener("DOMContentLoaded", function() {
  // Greet user (only if element exists)
  var usernameEl = document.getElementById("username");
  if (usernameEl) {
    try {
      var userName = window.prompt("Masukkan nama Anda:");
      if (userName && userName.trim().length > 0) {
        usernameEl.innerText = userName.trim();
      }
    } catch (err) {
      // ignore prompt errors (e.g., blocked)
    }
  }

  // Handle Contact Form (guard for missing form)
  var formEl = document.getElementById("messageForm");
  if (formEl) {
    formEl.addEventListener("submit", function(e) {
      e.preventDefault();

      var nameInput = document.getElementById("name");
      var emailInput = document.getElementById("email");
      var messageInput = document.getElementById("userMessage");
      var outputEl = document.getElementById("output");

      var name = nameInput ? nameInput.value.trim() : "";
      var email = emailInput ? emailInput.value.trim() : "";
      var message = messageInput ? messageInput.value.trim() : "";

      if (name && email && message) {
        if (outputEl) {
          outputEl.innerHTML = "" +
            "<h3>Message Received</h3>" +
            "<p><b>Name:</b> " + name + "</p>" +
            "<p><b>Email:</b> " + email + "</p>" +
            "<p><b>Message:</b> " + message + "</p>";
        }
        if (formEl.reset) {
          formEl.reset();
        }
      } else {
        window.alert("Please fill all fields!");
      }
    });
  }
});