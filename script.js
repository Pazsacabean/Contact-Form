// script.js

(function () {
    emailjs.init("F7pmJiU2J9hVV1nfh"); 
  })();
  
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      emailjs.sendForm("service_hxucmfw", "template_f4mt0mg", this).then(
        function () {
          displayThankYouMessage();
        },
        function (error) {
          displayErrorMessage(error);
        }
      );
    });
  
  function displayThankYouMessage() {
    const responseMessage = document.getElementById("response-message");
    responseMessage.style.display = "block";
    responseMessage.innerText = "Thank you for your message!";
    responseMessage.style.color = "green";
    document.getElementById("contact-form").reset(); 
  }
  
  function displayErrorMessage(error) {
    const responseMessage = document.getElementById("response-message");
    responseMessage.style.display = "block";
    responseMessage.innerText = "Failed to send email: " + JSON.stringify(error);
    responseMessage.style.color = "red";
  }
  