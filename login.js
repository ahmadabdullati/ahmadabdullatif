document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Basic validation
    if (!email || !password) {
        errorMessage.textContent = 'Please fill out both fields.';
        return;
    }

    // Example login check (replace with real authentication logic)
    if (email === 'hadilandahmad@gmail.com' && password === 'b7bk') {
        // Redirect to welcome page on successful login
        window.location.href ="ahmad.html" ;
    } else {
        errorMessage.textContent = 'Invalid email or password.';
    }
});
