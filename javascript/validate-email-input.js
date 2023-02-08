// Get the email input field
const emailInput = document.getElementById('trial-email-input');
const submitEmailButton = document.getElementById('trial-email-submit');

emailInput.oninvalid = () => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "Please enter a valid email address";
    errorMessage.className = "input-error";
    errorMessage.id = "email-input-error";
    emailInput.parentElement.insertBefore(errorMessage, submitEmailButton);
};
