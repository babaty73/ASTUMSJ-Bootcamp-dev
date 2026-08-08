/**
 * Utility functions for frontend form validation schemas
 */

export const emailValidator = {
  required: 'Email address field cannot be left blank',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email address string structure'
  }
};

export const passwordValidator = {
  required: 'Account password entry is mandatory',
  minLength: {
    value: 8,
    message: 'Password character count must be at least 8 elements'
  }
};

export const requiredField = (fieldName) => ({
  required: `${fieldName} is an absolute required tracking attribute`
});
