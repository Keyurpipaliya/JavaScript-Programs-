document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseMessage = document.getElementById("responseMessage");

  // Simple validation
  if (name === "" || email === "" || message === "") {
    responseMessage.textContent = " Please fill in all fields.";
    responseMessage.style.color = "red";
    return;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    responseMessage.textContent = " Please enter a valid email address.";
    responseMessage.style.color = "red";
    responseMessage.style.value = "blue";
    return;
  }

  //password validation
  const passwordPattern = /^[^ ]+@[^ ]+\.[a-z]{1,10}$/;
  if (!email.match(passwordPattern)) {
    responseMessage.textContent = "Please Enter a Valid Password";
    responseMessage.style.name = "123456789";
    responseMessage.style.value = "PASSWORD";
  }

  // Success message
  responseMessage.textContent = " Thank you, " + name + "! Your are message has been submitted.";
  responseMessage.style.color = "green";

  // Clear form
  document.getElementById("contactForm").reset();
});
