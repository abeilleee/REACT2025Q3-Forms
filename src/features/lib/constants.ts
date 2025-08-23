const IMG_MAX_SIZE_MB = 5;
export const IMG_MAX_SIZE_BYTES = IMG_MAX_SIZE_MB * 1024 * 1024;
export const MIN_PASSWORD_LENGTH = 8;
export const PASSWORD_REGEX = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]+$/;
export const enum PLACEHOLDER {
  NAME = 'Your name',
  AGE = 'Your age',
  EMAIL = 'example@email.com',
  PASSWORD = 'Enter the password',
  REPEAT_PASSWORD = 'Repeat your password',
}

export const VALID_EXTENSIONS = ['image/png', 'image/jpeg'];

export const enum ERRORS {
  DEFAULT_ERROR = 'An unexpected error',
  REQUIRED_FIELD = 'Required field',
  NAME_UPPER_CASE = 'The first letter of the name must be uppercased',
  AGE_NUMBER_ONLY = 'Age must be a number',
  AGE_INTEGER_ONLY = 'Age must be an integer',
  AGE_NO_NEGATIVE = 'Age cannot have a negative value',
  TC_REQUIRED = 'You must accept Terms and Conditions',
  PASSWORD_CONFIRM = 'Passwords do not match',
  IMAGE_SIZE = 'Image must be less than 5MB ',
  IMAGE_TYPE = 'Valid image extensions: png and jpg',
}
