document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const submitButton = document.getElementById('submitButton');

    // Fetch initial message
    fetch('/api/message')
        .then(response => response.json())
        .then(data => {
            messageElement.innerText = data.message;
        })
        .catch(error => {
            console.error('Error fetching message:', error);
        });

    // Add button click functionality
    submitButton.addEventListener('click', () => {
        // Simulate an action on the backend when the button is clicked
        fetch('/api/action', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                messageElement.innerText = data.result;
            })
            .catch(error => {
                console.error('Error performing action:', error);
            });
    });
});
