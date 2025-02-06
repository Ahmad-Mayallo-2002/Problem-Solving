const isValidHKPhoneNumber = (number) => /^\d{4} \d{4}$/.test(number);

const hasValidHKPhoneNumber = (string) => /\d{4} \d{4}/.test(string);
