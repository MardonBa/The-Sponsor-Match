// Function to sanitize different input types
export function sanitizeInput(input, type, options = {}) {
  switch (type) {

    case 'number':
      return sanitizeNumber(input, options.min, options.max);

    case 'text':
      return sanitizeText(input);

    case 'email':
      return sanitizeEmail(input);

    case 'password':
      return sanitizePassword(input);

    default:
      throw new Error(`Unknown input type: ${type}`);
  }
}

// Sanitize numeric input
function sanitizeNumber(value, min = -Infinity, max = Infinity) {
  const number = parseFloat(value);
  if (isNaN(number)) {
    throw new Error('Invalid number input');
  }
  if (number < min || number > max) {
    throw new Error(`Number out of range (${min}-${max})`);
  }
  return number;
}

// Sanitize text input
function sanitizeText(value) {
  if (typeof value !== 'string') {
    throw new Error('Input must be a string');
  }
  // Trim whitespace
  let sanitized = value.trim();

  // Escape HTML special characters
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  sanitized = sanitized.replace(/[&<>"]/g, (char) => map[char]);

  return sanitized;
}

function sanitizeEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function sanitizePassword(password) {
// Allow for digits, letters (don't have to have uppercase), special characters
// Must have a letter (any case) and number
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordRegex.test(password);
}