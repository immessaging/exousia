const phoneInput = document.getElementById('phone');
const countryCodeSelect = document.getElementById('country-code');

phoneInput.addEventListener('input', () => {
  const phoneNumber = phoneInput.value;
  const countryCode = countryCodeSelect.value;
  const fullPhoneNumber = `${countryCode} ${phoneNumber}`;

  // Validate the phone number here
  // For example, you can use a regular expression to check if the phone number is valid
  const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
  if (phoneNumberRegex.test(phoneNumber)) {
    console.log(`Valid phone number: ${fullPhoneNumber}`);
  } else {
    console.log(`Invalid phone number: ${fullPhoneNumber}`);
  }
});


