// Get the form element by its ID
const myForm = document.getElementById('myForm');

// Add an event listener for the 'submit' event
myForm.addEventListener('submit', function(event) {
    // Prevent page reload
    event.preventDefault(); 

    // Get the name value
    const nameInput = document.getElementById('name');
    const userName = nameInput.value;

    // Message area
    const messageArea = document.getElementById('messageArea');

    // Display confirmation
    if (userName.trim() !== "") {
        messageArea.textContent = `Thank you, ${userName}! Your form has been submitted successfully.`;
        nameInput.value = ''; // clear input
    } else {
        messageArea.textContent = 'Please enter your name before submitting.';
        messageArea.style.color = 'red'; // error color
    }
});