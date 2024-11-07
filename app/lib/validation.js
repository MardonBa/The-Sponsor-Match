export function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export function validatePassword(password) {
    // Allow for digits, letters (don't have to have uppercase), special characters
    // Must have a letter (any case) and number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,12}$/;

    return passwordRegex.test(password);
}