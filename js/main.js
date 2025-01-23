document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    let valid = true;

    // Reset previous error messages
    resetErrorMessages();

    // Validate Full Name
    const fullName = document.getElementById('full-name').value.trim();
    if (!/^[A-Za-z\s]+$/.test(fullName) || fullName === '') {
        showError('name-error', 'Full name cannot be empty and should only contain letters and spaces.');
        valid = false;
    }

    // Validate Email Address
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        showError('email-error', 'Please enter a valid email address.');
        valid = false;
    }

    // Validate Contact Number
    const phone = document.getElementById('phone').value.trim();
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        showError('phone-error', 'Please enter a valid 10-digit phone number.');
        valid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value.trim();
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password)) {
        showError('password-error', 'Password must be at least 8 characters long and include one uppercase letter, one number, and one special character.');
        valid = false;
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    if (confirmPassword !== password) {
        showError('confirm-password-error', 'Passwords must match.');
        valid = false;
    }

    // Validate City
    const city = document.getElementById('city').value.trim();
    if (!/^[A-Za-z\s]+$/.test(city) || city === '') {
        showError('city-error', 'City name cannot be empty and should only contain letters and spaces.');
        valid = false;
    }

    // Validate Country
    const country = document.getElementById('country').value.trim();
    if (!/^[A-Za-z\s]+$/.test(country) || country === '') {
        showError('country-error', 'Country name cannot be empty and should only contain letters and spaces.');
        valid = false;
    }

    // If all validations pass
    if (valid) {
        document.getElementById('success-message').textContent = 'Form submitted successfully!';
        document.getElementById('success-message').style.display = 'block';
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
    document.getElementById(elementId).style.display = 'block';
}

function resetErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.style.display = 'none';
    });
    document.getElementById('success-message').style.display = 'none';
}
