
  export const emailValidationRule = [
    { required: true, message: 'Please enter your email' },
    {
        type: 'email',
        message: 'Please enter a valid email address',
    }
  ];

  export const phoneNumberValidationRule = [
    { required: true, message: 'Please enter your phone number' },
    {
        pattern: /^\d{10}$/,
        message: 'Phone number must be 10 digits',
    }
  ];
  
  