function Validation(values) {
    let error = {};

    // Email and Password Patterns
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

    // Name Validation
    if (!values.name.trim()) {
        error.name = "Name should not be empty";
    } else {
        error.name = "";
    }

    // Email Validation
    if (!values.email.trim()) {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Invalid email format";
    } else {
        error.email = "";
    }

    // Password Validation
    if (!values.password.trim()) {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password =
            "Password must be at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)";
    } else {
        error.password = "";
    }

    return error;
}

export default Validation;
